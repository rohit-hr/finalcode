using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using User_Project.Models;

namespace User_Project.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class IBRegistrationController : ApiController
    {
        dbBankEntities1 entities = new dbBankEntities1();

        public IEnumerable<tblNetBanking> Get()
        {
            return entities.tblNetBankings.ToList();
        }

        //public void Post(tblNetBanking netbanking)
        //{
        //    entities.tblNetBankings.Add(netbanking);
        //    entities.SaveChanges();
        //}

        //[HttpPost]
        //public HttpResponseMessage UserReg(tblNetBanking tblbank)
        //{
        //    proc_ValidReg1_Result result = null;
        //    result = entities.proc_ValidReg1(tblbank.account_number).FirstOrDefault();

        //    if (result == null)
        //    {
        //        entities.tblNetBankings.Add(tblbank);
        //        entities.SaveChanges();
        //        return Request.CreateResponse<proc_ValidReg1_Result>(result);
        //    }
        //    else
        //        return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Already Registered");
        //}

        [HttpPost]
        public HttpResponseMessage UserReg(tblNetBanking tblbank)
        {
            proc_test1_Result result = null;
            proc_test21_Result result2 = null;
            proc_test31_Result result3 = null;
            result = entities.proc_test1(tblbank.user_id).FirstOrDefault();
            result2 = entities.proc_test21(tblbank.user_id).FirstOrDefault();
            result3 = entities.proc_test31(tblbank.user_id).FirstOrDefault();

            if (result2 != null)
            {
                if (result3 != null)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Already Registered");
                }
                else
                {
                    entities.tblNetBankings.Add(tblbank);
                    entities.SaveChanges();
                    return Request.CreateResponse<proc_test1_Result>(result);
                }
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "User ID not found");
            }
        }
    }
}
