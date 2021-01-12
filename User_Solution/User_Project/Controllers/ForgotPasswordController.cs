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
    [RoutePrefix("reset")]
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class ForgotPasswordController : ApiController
    {
        dbBankEntities1 entities = new dbBankEntities1();

        [HttpPost]
        [Route("forgotPassword")]
        public async Task SendEmail(tblCustomer cust)
        {
            // string email = email_id.ToString();
            var message = new MailMessage();
            message.To.Add(new MailAddress(cust.email_id));
            message.From = new MailAddress("RDNS Bank <rdnsbank@gmail.com>");
            //message.Bcc.Add(new MailAddress("Amit Mohanty <amitmohanty@email.com>"));
            message.Subject = "The OTP to reset your login password";
            Random rnd = new Random();
            int otp = rnd.Next(100000, 999999);
            message.Body = otp.ToString();
            message.IsBodyHtml = true;
            using (var smtp = new SmtpClient())
            {
                await smtp.SendMailAsync(message);
                await Task.FromResult(0);
                entities.proc_InsertintotblwithEmail(cust.email_id, otp);
            }
        }


        [HttpPost]
        [Route("changePassword")]
        public HttpResponseMessage ChangePassword(tblUserotp otp)
        {
            proc_OtpCheck2_Result res = null;
            res = entities.proc_OtpCheck2(otp.email_id, otp.otp).FirstOrDefault();
            if (res == null)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Wrong OTP entered");

            }
            else
            {
                return Request.CreateResponse<proc_OtpCheck2_Result>(res);
            }

        }


        [HttpPut]
        [Route("UpdatePassword")]
        public HttpResponseMessage updatePassword(tblNetBanking netbank)
        {
            var result = entities.tblNetBankings.Where(a => a.user_id == netbank.user_id).FirstOrDefault();
            if (result != null)
            {
                result.password = netbank.password;
                entities.SaveChanges();
                return Request.CreateErrorResponse(HttpStatusCode.Accepted, "Password accepted");
            }
            else
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Password not Updated");
        }


        [HttpPost]
        [Route("senduserid")]
        public async Task SendUsernametoMails(tblCustomer cust)
        {
            // string email = email_id.ToString();
            proc_senduserid1_Result1 res = null;
            res = entities.proc_senduserid1(cust.email_id).FirstOrDefault();
            var message = new MailMessage();
            message.To.Add(new MailAddress(cust.email_id));
            message.From = new MailAddress("RDNS Bank <rdnsbank@gmail.com>");
            //message.Bcc.Add(new MailAddress("Amit Mohanty <amitmohanty@email.com>"));
            message.Subject = "The Username for RDNS Banking";
            message.Body = res.user_id.ToString();
            message.IsBodyHtml = true;
            using (var smtp = new SmtpClient())
            {
                await smtp.SendMailAsync(message);
                await Task.FromResult(0);

            }
        }
    }
}
