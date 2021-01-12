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
    public class LoginController : ApiController
    {
        dbBankEntities1 entities = new dbBankEntities1();

        [HttpPost]
        public HttpResponseMessage UserLogin(tblNetBanking netusers)
        {
            sp_LoginCheck_Result res = entities.sp_LoginCheck(netusers.user_id, netusers.password).FirstOrDefault();

            if (res == null)
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Invalid Username / Password");
            else
                return Request.CreateResponse<sp_LoginCheck_Result>(res);

        }
    }
}
