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
    [RoutePrefix("EditDetails")]
    public class UpdateDetailsController : ApiController
    {
        dbBankEntities1 entities = new dbBankEntities1();

        [Route("EditEmail")]
        public void Put(int refid, tblCustomer customer)
        {
            tblCustomer UpdateCustomer = entities.tblCustomers.Find(refid);
            UpdateCustomer.email_id = customer.email_id;
            //UpdateCustomer.mobile_number = customer.mobile_number;
            //UpdateCustomer.Residential_address = customer.Residential_address;
            //UpdateCustomer.permanent_address = customer.permanent_address;
            //UpdateCustomer.occupation_Type = customer.occupation_Type;
            entities.SaveChanges();
        }
        [Route("EditMobileNumber")]
        [HttpPut]
        public void MobilePut(int refid, tblCustomer customer)
        {
            tblCustomer UpdateCustomer = entities.tblCustomers.Find(refid);

            UpdateCustomer.mobile_number = customer.mobile_number;

            entities.SaveChanges();
        }

        [Route("EditResidentialAddress")]
        [HttpPut]
        public void ResidentialAddressPut(int refid, tblCustomer customer)
        {
            tblCustomer UpdateCustomer = entities.tblCustomers.Find(refid);
            UpdateCustomer.Residential_address = customer.Residential_address;

            entities.SaveChanges();
        }

        [Route("EditPermanentAddress")]
        [HttpPut]
        public void PermanentAddressPut(int refid, tblCustomer customer)
        {
            tblCustomer UpdateCustomer = entities.tblCustomers.Find(refid);
            UpdateCustomer.permanent_address = customer.permanent_address;

            entities.SaveChanges();
        }

        [Route("EditOccupationType")]
        [HttpPut]
        public void OccupationTypePut(int refid, tblCustomer customer)
        {
            tblCustomer UpdateCustomer = entities.tblCustomers.Find(refid);
            UpdateCustomer.occupation_Type = customer.occupation_Type;

            entities.SaveChanges();
        }
    }
}
