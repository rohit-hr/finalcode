using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity;
using System.Web.Http.Cors;
using User_Project.Models;
using System.Threading.Tasks;
using System.Net.Mail;

namespace User_Project.Controllers
{
    [EnableCors(origins: "http://localhost:4200", methods: "*", headers: "*")]
    public class TransactionController : ApiController
    {
        dbBankEntities1 entities = new dbBankEntities1();

        [HttpGet]
        public HttpResponseMessage GetTransaction(int id)
        {
            tblTransaction transaction = entities.tblTransactions.Where(t => t.from_account == id).OrderByDescending(t => t.transaction_id).FirstOrDefault();
            if (transaction == null)
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Invalid ID");
            else
            {
                //tblTransaction transactions = entities.tblTransactions.Where(t => t.transaction_id == transaction).FirstOrDefault();
                transaction.from_account = transaction.from_account % 1000;
                transaction.to_account = transaction.to_account % 1000;
                return Request.CreateResponse<tblTransaction>(HttpStatusCode.OK, transaction);
            }
        }

        [Route("getAccountNumber")]
        [HttpGet]
        public HttpResponseMessage GetAccountNumber(string id)
        {
            int customer_id = Convert.ToInt32(id);
            tblNetBanking customer = entities.tblNetBankings.Where(c => c.user_id == customer_id).FirstOrDefault();
            if (customer == null)
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Invalid ID");
            else
            {
                return Request.CreateResponse<int>(HttpStatusCode.OK, customer.account_number);
            }
        }

        [Route("getTransactionPassword")]
        [HttpGet]
        public HttpResponseMessage GetTransactionPassword(string id)
        {
            int customer_id = Convert.ToInt32(id);
            tblNetBanking customer = entities.tblNetBankings.Where(c => c.user_id == customer_id).FirstOrDefault();
            if (customer == null)
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Invalid ID");
            else
            {
                return Request.CreateResponse<string>(HttpStatusCode.OK, customer.transaction_password);
            }
        }

        [Route("getEmailId")]
        [HttpGet]
        public HttpResponseMessage GetEmailId(string id)
        {
            int customer_id = Convert.ToInt32(id);
            var emailId = entities.sp_getEmailId(customer_id).FirstOrDefault();
            if (emailId == null)
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Email-Id not Found");
            else
            {
                return Request.CreateResponse<string>(HttpStatusCode.OK, emailId);
            }
        }

        [HttpPost]
        public HttpResponseMessage InitiatePayment(tblTransaction transaction)
        {
            DbContextTransaction trans = entities.Database.BeginTransaction();
            try
            {
                transaction.customer_id = entities.tblBalances.Where(b => b.account_number == transaction.from_account).FirstOrDefault().customer_id;
                var beneficiary = entities.tblBeneficiaries.Where(b => b.account_number == transaction.from_account && b.beneficiary_account_number == transaction.to_account).FirstOrDefault();
                if (beneficiary == null)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Beneficiary Account Number not added");
                }
                else
                {
                    var balance1 = entities.tblBalances.Where(b => b.customer_id == transaction.customer_id).FirstOrDefault();
                    var balance2 = entities.tblBalances.Where(b => b.account_number == transaction.to_account).FirstOrDefault();
                    if (balance1.balance < transaction.amount)
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Your transaction failed due to insufficient balance. Please try again.");
                    }
                    else
                    {
                        transaction.from_Account_balance = balance1.balance - transaction.amount;
                        transaction.to_Account_balance = balance2.balance + transaction.amount;
                        DateTime now = DateTime.Now;
                        transaction.transaction_date = now;
                    }
                    entities.sp_transact(transaction.customer_id, transaction.transaction_type, transaction.from_account, transaction.to_account,
                        transaction.from_Account_balance, transaction.to_Account_balance, transaction.amount, transaction.transaction_date, transaction.remarks);
                    entities.SaveChanges();
                    trans.Commit();
                    return Request.CreateResponse(HttpStatusCode.Created);
                }
            }
            catch (Exception)
            {
                trans.Rollback();
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "Something Went Wrong. Unable to process your transaction. Please try again.");
            }
        }

        [HttpPost]
        [Route("sendEmail")]
        public async Task SendEmail(EmailTransaction email)
        {
            var message = new MailMessage();
            message.To.Add(new MailAddress(email.email_Id));
            message.From = new MailAddress("RDNS Bank <rdnsbank@gmail.com>");
            message.Subject = email.subject;
            message.Body = email.body;
            message.IsBodyHtml = true;
            using (var smtp = new SmtpClient())
            {
                await smtp.SendMailAsync(message);
                await Task.FromResult(0);
            }
        }
    }
}
