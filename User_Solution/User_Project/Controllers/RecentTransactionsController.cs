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
    public class RecentTransactionsController : ApiController
    {
        dbBankEntities1 entities = new dbBankEntities1();
        [HttpGet]
        public HttpResponseMessage GetRecentTransactions(int id)
        {

            var result = entities.proc_Recent_Transactions(id);
            if (result == null)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "No Customers");
            else
                return Request.CreateResponse(result);
        }
    }
}
