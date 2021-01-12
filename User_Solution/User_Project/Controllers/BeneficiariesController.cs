using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using User_Project.Models;

namespace User_Project.Controllers
{
    [EnableCors(origins: "http://localhost:4200", methods: "*", headers: "*")]
    public class BeneficiariesController : ApiController
    {
        dbBankEntities1 entities = new dbBankEntities1();
        public HttpResponseMessage GetBenificiaries([FromUri]int id)
        {
            List<tblBeneficiary> beneficiaries = new List<tblBeneficiary>();
            //int userId = Convert.ToInt32(id);
            beneficiaries = entities.tblBeneficiaries.Where(b => b.account_number == id).ToList();
            if (beneficiaries == null)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "No Added Benificiaries");
            }
            else
            {
                return Request.CreateResponse<List<tblBeneficiary>>(HttpStatusCode.OK, beneficiaries);
            }
        }
        [HttpPost]
        public HttpResponseMessage AddBenificiary(tblBeneficiary beneficiary)
        {
            DbContextTransaction trans = entities.Database.BeginTransaction();
            try
            {
                tblNetBanking customer = entities.tblNetBankings.Where(c => c.account_number == beneficiary.beneficiary_account_number).FirstOrDefault();
                if (customer == null)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Benificiary Account Number does not exist");
                }
                else
                {
                    if (beneficiary.account_number == beneficiary.beneficiary_account_number)
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Invalid Account Number");
                    }
                    tblBeneficiary beneficiary1 = entities.tblBeneficiaries.Where(b => b.beneficiary_account_number == beneficiary.beneficiary_account_number && b.account_number == beneficiary.account_number).FirstOrDefault();
                    if (beneficiary1 == null)
                    {
                        beneficiary.customer_id = customer.user_id;
                        entities.tblBeneficiaries.Add(beneficiary);
                        entities.SaveChanges();
                        trans.Commit();
                        return Request.CreateResponse<tblBeneficiary>(HttpStatusCode.Created, beneficiary);
                    }
                    else
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Benificiary already added");
                    }
                }
            }
            catch (Exception)
            {
                trans.Rollback();
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "Unable to add Beneficiary");
            }

        }
        [HttpDelete]
        public HttpResponseMessage DeleteBenificiary(int id, string account_no)
        {
            DbContextTransaction trans = entities.Database.BeginTransaction();
            try
            {
                int accountNo = Convert.ToInt32(account_no);
                tblBeneficiary beneficiary = entities.tblBeneficiaries.Where(b => b.beneficiary_account_number == id && b.account_number == accountNo).FirstOrDefault();
                if (beneficiary == null)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Beneficiary not found");
                }
                else
                {
                    entities.tblBeneficiaries.Remove(beneficiary);
                    entities.SaveChanges();
                    trans.Commit();
                    return Request.CreateResponse<tblBeneficiary>(HttpStatusCode.OK, beneficiary);
                }
            }
            catch (Exception)
            {
                trans.Rollback();
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "Oops! Something went wrong. Unable to Delete Beneficiary!");
            }
        }
    }
}
