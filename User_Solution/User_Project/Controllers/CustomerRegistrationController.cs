using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using User_Project.Models;

namespace User_Project.Controllers
{
    [RoutePrefix("custreg")]
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class CustomerRegistrationController : ApiController
    {
        dbBankEntities1 entities = new dbBankEntities1();

        public IEnumerable<tblCustomer> Get()
        {
            return entities.tblCustomers.ToList();
        }

        //public void Post(tblCustomer customer)
        //{
        //    entities.tblCustomers.Add(customer);
        //    entities.SaveChanges();
        //}

        [HttpPost]
        public HttpResponseMessage AddCust(tblCustomer cust)
        {
            proc_ValidCust1_Result resultcheck = null;
            resultcheck = entities.proc_ValidCust1(cust.aadhar_number).FirstOrDefault();
            if (resultcheck == null)
            {
                cust.approved_status = "pending";
                DateTime now = DateTime.Now;
                cust.account_OpenDate = now;
                entities.tblCustomers.Add(cust);
                entities.SaveChanges();
                return Request.CreateResponse<proc_ValidCust1_Result>(resultcheck);
            }
            else
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "User Account already exists");
        }

        [HttpPost]
        [Route("sendemail")]
        public async Task SendUsernametoMails(tblCustomer customer)
        {
            tblCustomer resadmin = entities.tblCustomers.Where(a => a.email_id == customer.email_id).FirstOrDefault();
            var message = new MailMessage();
            message.To.Add(new MailAddress(customer.email_id));
            message.From = new MailAddress("RDNS Bank <rdnsbank@gmail.com>");
            message.Subject = "Thank you for applying to RDNS Bank";
            message.Body = "Your Reference ID is: " + resadmin.Reference_id.ToString() + "<br/> Please use this Reference ID to tack your application status.";
            message.IsBodyHtml = true;
            using (var smtp = new SmtpClient())
            {
                await smtp.SendMailAsync(message);
                await Task.FromResult(0);
            }
        }
    }
}
