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
    public class ChangeTransactionPasswordController : ApiController
    {
        dbBankEntities1 entities = new dbBankEntities1();
        public HttpResponseMessage Put([FromUri] int id, tblNetBanking users)
        {
            var res = entities.sp_updateTransactionPassword(id, users.transaction_password);
            if (res == 0)
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Invalid User ID");
            else
                return Request.CreateResponse(res);
        }

        public HttpResponseMessage Post(int id, tblNetBanking users)
        {
            var res = entities.sp_checkOldTransactionPassword(id, users.transaction_password).FirstOrDefault();
            if (res == null)
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Password does not match");
            else
                return Request.CreateResponse(res);

        }

    }
}
