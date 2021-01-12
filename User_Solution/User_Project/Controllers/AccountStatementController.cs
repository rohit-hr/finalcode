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
    public class AccountStatementController : ApiController
    {
        dbBankEntities1 entities = new dbBankEntities1();

        [HttpGet]
        public HttpResponseMessage GetCustomerNames([FromUri] int id, string start_date, string end_date)
        {

            var result = entities.proc_Mini_Statement1(id, start_date, end_date);
            if (result == null)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "No Customers");
            else
                return Request.CreateResponse(result);
        }
    }
}
