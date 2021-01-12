using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Runtime.Serialization;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Threading.Tasks;
using User_Project.Models;
using System.Net.Mail;

namespace User_Project.Controllers
{
    [RoutePrefix("Divya")]
    [DataContract]
    [EnableCors(origins: "http://localhost:52670", headers: "*", methods: "*")]
    public class AdminController : ApiController
    {

        dbBankEntities1 entities = new dbBankEntities1();

        //[Route("GetAllCustomers")]
        //public HttpResponseMessage Get()
        //{
        //    return Request.CreateResponse(entities.tblCustomers);
        //}

        [HttpPost]
        public HttpResponseMessage UserLogin(tbladmin admin)
        {
            proc_LoginCheck_Result result = null;
            result = entities.proc_LoginCheck(admin.admin_id, admin.password).FirstOrDefault();
            if (result == null)
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Invalid Username or password");
            else
                return Request.CreateResponse<proc_LoginCheck_Result>(result);
        }

        [HttpGet]
        public HttpResponseMessage GetCustomerNames()
        {
            //proc_GettheCustomerApplications_Result result = null;
            var result = entities.proc_GetheCustomerApplications();
            if (result == null)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "No Customers");
            else
                return Request.CreateResponse(result);
        }

        public HttpResponseMessage GetCustomersProfile([FromUri] int id)
        {
            var result = entities.proc_GetCustomersProfilesbyReferenceid(id);
            if (result == null)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "No Customers");
            else
                return Request.CreateResponse(result);
        }

        [HttpPut]
        public HttpResponseMessage UpdateApprovedStatus(string id, tblCustomer cust)
        {
            var result = entities.tblCustomers.Where(c => c.Reference_id == cust.Reference_id).FirstOrDefault();
            if (result != null)
            {
                result.approved_status = "approved";
                DateTime now = DateTime.Now;
                result.approved_date = now;
                result.approved_by = id;
                entities.SaveChanges();
                Random random = new Random();
                int account_number = random.Next(123456789, 978989845);
                entities.proc_InsertApprvCustomersinBankingTble(cust.Reference_id, account_number, cust.account_OpenDate);
                return Request.CreateErrorResponse(HttpStatusCode.Accepted, "updated");
            }

            else
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, " not Updated");

        }

        [HttpPut]
        [Route("UpdateRejectedStatusApplications")]
        public HttpResponseMessage UpdateRejectStatus(tblCustomer cust)
        {
            var result = entities.tblCustomers.Where(c => c.Reference_id == cust.Reference_id).FirstOrDefault();
            if (result != null)
            {
                result.approved_status = "rejected";
                entities.SaveChanges();
                return Request.CreateErrorResponse(HttpStatusCode.Accepted, "updated");
            }

            else
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, " not Updated");

        }

        [Route("ApprovedApplications")]
        public HttpResponseMessage GetApprovedCustomers()
        {
            //proc_GettheCustomerApplications_Result result = null;
            var result = entities.proc_GetApprovedCustomers();
            if (result == null)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "No Customers");
            else
                return Request.CreateResponse(result);
        }

        [Route("PendingApplications")]
        public HttpResponseMessage GetPendingApplications()
        {
            //proc_GettheCustomerApplications_Result result = null;
            var result = entities.proc_GetPendingApplications();
            if (result == null)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "No Customers");
            else
                return Request.CreateResponse(result);
        }

        [Route("RejectedApplications")]
        public HttpResponseMessage GetRejectedApplications()
        {
            //proc_GettheCustomerApplications_Result result = null;
            var result = entities.proc_RejectedApplications();
            if (result == null)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "No Customers");
            else
                return Request.CreateResponse(result);
        }

        [HttpPost]
        [Route("forgotPassword")]
        public async Task SendEmail(AdminEmail email)
        {
            // string email = email_id.ToString();
            var message = new MailMessage();
            message.To.Add(new MailAddress(email.email_id));
            message.From = new MailAddress("RDNS Bank <rdnsbank@gmail.com>");
            //message.Bcc.Add(new MailAddress("Amit Mohanty <amitmohanty@email.com>"));
            message.Subject = "the otp to reset your password";
            Random rnd = new Random();
            int otp = rnd.Next(100000, 999999);
            message.Body = otp.ToString();
            message.IsBodyHtml = true;
            using (var smtp = new SmtpClient())
            {
                await smtp.SendMailAsync(message);
                await Task.FromResult(0);
                entities.proc_InsertintotblwithEmailadmin(email.email_id, otp);
            }
        }

        [HttpPost]
        [Route("changePassword")]
        public HttpResponseMessage ChangePassword(AdminEmail mail)
        {
            proc_OtpCheckadmin_Result res = null;
            res = entities.proc_OtpCheckadmin(mail.email_id, mail.otp).FirstOrDefault();
            if (res == null)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "OTP not matched Please enter correct otp");

            }
            else
                return Request.CreateResponse<proc_OtpCheckadmin_Result>(res);

        }

        [HttpPut]
        [Route("UpdatePassword")]
        public HttpResponseMessage updatePassword(tbladmin admin)
        {
            var result = entities.tbladmins.Where(a => a.email_id == admin.email_id).FirstOrDefault();
            if (result != null)
            {
                result.password = admin.password;
                entities.SaveChanges();
                return Request.CreateErrorResponse(HttpStatusCode.Accepted, "Password accepted");
            }
            else
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "password not updated");
        }

        [HttpPost]
        [Route("sendmails")]
        public async Task SendEmailToApprovedCustomers(tblCustomer customer)
        {
            proc_GetdetailsForMail_Result res = entities.proc_GetdetailsForMail(customer.email_id).FirstOrDefault();
            // string email = email_id.ToString();
            var message = new MailMessage();
            message.To.Add(new MailAddress(customer.email_id));
            message.From = new MailAddress("RDNS Bank <rdnsbank@gmail.com>");
            //message.Bcc.Add(new MailAddress("Amit Mohanty <amitmohanty@email.com>"));
            message.Subject = "Status of RDNS Banking Application";
            message.Body = "Your Application is successfully approved." + "<br/>The Account Number is: " + res.account_number.ToString() +
            "<br/>The User ID: " + res.customer_id.ToString();
            message.IsBodyHtml = true;
            using (var smtp = new SmtpClient())
            {
                await smtp.SendMailAsync(message);
                await Task.FromResult(0);

            }
        }

        [HttpPost]
        [Route("sendusername")]
        public async Task SendUsernametoMails(tbladmin admin)
        {
            // string email = email_id.ToString();
            tbladmin resadmin = entities.tbladmins.Where(a => a.email_id == admin.email_id).FirstOrDefault();
            var message = new MailMessage();
            message.To.Add(new MailAddress(admin.email_id));
            message.From = new MailAddress("RDNS Bank <rdnsbank@gmail.com>");
            //message.Bcc.Add(new MailAddress("Amit Mohanty <amitmohanty@email.com>"));
            message.Subject = "The Username for RDNS Banking";
            message.Body = resadmin.admin_id;
            message.IsBodyHtml = true;
            using (var smtp = new SmtpClient())
            {
                await smtp.SendMailAsync(message);
                await Task.FromResult(0);

            }
        }

    }
}
