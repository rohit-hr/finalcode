﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace User_Project.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class dbBankEntities1 : DbContext
    {
        public dbBankEntities1()
            : base("name=dbBankEntities1")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<tbladmin> tbladmins { get; set; }
        public virtual DbSet<tblBalance> tblBalances { get; set; }
        public virtual DbSet<tblBankingCustomer> tblBankingCustomers { get; set; }
        public virtual DbSet<tblBeneficiary> tblBeneficiaries { get; set; }
        public virtual DbSet<tblCustomer> tblCustomers { get; set; }
        public virtual DbSet<tblLocked> tblLockeds { get; set; }
        public virtual DbSet<tblNetBanking> tblNetBankings { get; set; }
        public virtual DbSet<tblTransaction> tblTransactions { get; set; }
        public virtual DbSet<tblUserotp> tblUserotps { get; set; }
        public virtual DbSet<tblAdminOtp> tblAdminOtps { get; set; }
    
        public virtual ObjectResult<Nullable<int>> get_ReferenceId(Nullable<int> id)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("id", id) :
                new ObjectParameter("id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Nullable<int>>("get_ReferenceId", idParameter);
        }
    
        public virtual ObjectResult<Mini_Statement1_Result> Mini_Statement1(Nullable<int> id, string start_date, string end_date)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("id", id) :
                new ObjectParameter("id", typeof(int));
    
            var start_dateParameter = start_date != null ?
                new ObjectParameter("start_date", start_date) :
                new ObjectParameter("start_date", typeof(string));
    
            var end_dateParameter = end_date != null ?
                new ObjectParameter("end_date", end_date) :
                new ObjectParameter("end_date", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Mini_Statement1_Result>("Mini_Statement1", idParameter, start_dateParameter, end_dateParameter);
        }
    
        public virtual ObjectResult<proc_accountsummary_Result> proc_accountsummary(Nullable<int> id)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("id", id) :
                new ObjectParameter("id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<proc_accountsummary_Result>("proc_accountsummary", idParameter);
        }
    
        public virtual ObjectResult<Nullable<int>> proc_CheckCust(Nullable<int> accno)
        {
            var accnoParameter = accno.HasValue ?
                new ObjectParameter("accno", accno) :
                new ObjectParameter("accno", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Nullable<int>>("proc_CheckCust", accnoParameter);
        }
    
        public virtual ObjectResult<Nullable<int>> proc_test(Nullable<int> userid)
        {
            var useridParameter = userid.HasValue ?
                new ObjectParameter("userid", userid) :
                new ObjectParameter("userid", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Nullable<int>>("proc_test", useridParameter);
        }
    
        public virtual ObjectResult<Nullable<int>> proc_test2(Nullable<int> userid)
        {
            var useridParameter = userid.HasValue ?
                new ObjectParameter("userid", userid) :
                new ObjectParameter("userid", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Nullable<int>>("proc_test2", useridParameter);
        }
    
        public virtual ObjectResult<Nullable<int>> proc_test3(Nullable<int> userid)
        {
            var useridParameter = userid.HasValue ?
                new ObjectParameter("userid", userid) :
                new ObjectParameter("userid", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Nullable<int>>("proc_test3", useridParameter);
        }
    
        public virtual ObjectResult<string> proc_ValidCust(string aadharno)
        {
            var aadharnoParameter = aadharno != null ?
                new ObjectParameter("aadharno", aadharno) :
                new ObjectParameter("aadharno", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<string>("proc_ValidCust", aadharnoParameter);
        }
    
        public virtual ObjectResult<Nullable<int>> proc_ValidReg(Nullable<int> ano)
        {
            var anoParameter = ano.HasValue ?
                new ObjectParameter("ano", ano) :
                new ObjectParameter("ano", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Nullable<int>>("proc_ValidReg", anoParameter);
        }
    
        public virtual ObjectResult<procedure_GetUserProfilesForCustomers_Result> procedure_GetUserProfilesForCustomers(Nullable<int> id)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("id", id) :
                new ObjectParameter("id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<procedure_GetUserProfilesForCustomers_Result>("procedure_GetUserProfilesForCustomers", idParameter);
        }
    
        public virtual ObjectResult<Recent_Transactions_Result> Recent_Transactions(Nullable<int> id)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("id", id) :
                new ObjectParameter("id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Recent_Transactions_Result>("Recent_Transactions", idParameter);
        }
    
        public virtual ObjectResult<sp_DisplayTransaction_Result> sp_DisplayTransaction(Nullable<int> trans_id)
        {
            var trans_idParameter = trans_id.HasValue ?
                new ObjectParameter("trans_id", trans_id) :
                new ObjectParameter("trans_id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<sp_DisplayTransaction_Result>("sp_DisplayTransaction", trans_idParameter);
        }
    
        public virtual ObjectResult<sp_LoginCheck_Result> sp_LoginCheck(Nullable<int> userid, string pwd)
        {
            var useridParameter = userid.HasValue ?
                new ObjectParameter("userid", userid) :
                new ObjectParameter("userid", typeof(int));
    
            var pwdParameter = pwd != null ?
                new ObjectParameter("pwd", pwd) :
                new ObjectParameter("pwd", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<sp_LoginCheck_Result>("sp_LoginCheck", useridParameter, pwdParameter);
        }
    
        public virtual ObjectResult<Nullable<int>> sp_SelectTransactionId(Nullable<int> acnt_no)
        {
            var acnt_noParameter = acnt_no.HasValue ?
                new ObjectParameter("acnt_no", acnt_no) :
                new ObjectParameter("acnt_no", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Nullable<int>>("sp_SelectTransactionId", acnt_noParameter);
        }
    
        public virtual int sp_transact(Nullable<int> cust_id, string mode, Nullable<int> from_acnt, Nullable<int> to_acnt, Nullable<double> from_acnt_bal, Nullable<double> to_acnt_bal, Nullable<double> amount, Nullable<System.DateTime> trans_date, string remarks)
        {
            var cust_idParameter = cust_id.HasValue ?
                new ObjectParameter("cust_id", cust_id) :
                new ObjectParameter("cust_id", typeof(int));
    
            var modeParameter = mode != null ?
                new ObjectParameter("mode", mode) :
                new ObjectParameter("mode", typeof(string));
    
            var from_acntParameter = from_acnt.HasValue ?
                new ObjectParameter("from_acnt", from_acnt) :
                new ObjectParameter("from_acnt", typeof(int));
    
            var to_acntParameter = to_acnt.HasValue ?
                new ObjectParameter("to_acnt", to_acnt) :
                new ObjectParameter("to_acnt", typeof(int));
    
            var from_acnt_balParameter = from_acnt_bal.HasValue ?
                new ObjectParameter("from_acnt_bal", from_acnt_bal) :
                new ObjectParameter("from_acnt_bal", typeof(double));
    
            var to_acnt_balParameter = to_acnt_bal.HasValue ?
                new ObjectParameter("to_acnt_bal", to_acnt_bal) :
                new ObjectParameter("to_acnt_bal", typeof(double));
    
            var amountParameter = amount.HasValue ?
                new ObjectParameter("amount", amount) :
                new ObjectParameter("amount", typeof(double));
    
            var trans_dateParameter = trans_date.HasValue ?
                new ObjectParameter("trans_date", trans_date) :
                new ObjectParameter("trans_date", typeof(System.DateTime));
    
            var remarksParameter = remarks != null ?
                new ObjectParameter("remarks", remarks) :
                new ObjectParameter("remarks", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("sp_transact", cust_idParameter, modeParameter, from_acntParameter, to_acntParameter, from_acnt_balParameter, to_acnt_balParameter, amountParameter, trans_dateParameter, remarksParameter);
        }
    
        public virtual ObjectResult<proc_ValidCust1_Result> proc_ValidCust1(string aadharno)
        {
            var aadharnoParameter = aadharno != null ?
                new ObjectParameter("aadharno", aadharno) :
                new ObjectParameter("aadharno", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<proc_ValidCust1_Result>("proc_ValidCust1", aadharnoParameter);
        }
    
        public virtual ObjectResult<proc_test1_Result> proc_test1(Nullable<int> userid)
        {
            var useridParameter = userid.HasValue ?
                new ObjectParameter("userid", userid) :
                new ObjectParameter("userid", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<proc_test1_Result>("proc_test1", useridParameter);
        }
    
        public virtual ObjectResult<proc_test21_Result> proc_test21(Nullable<int> userid)
        {
            var useridParameter = userid.HasValue ?
                new ObjectParameter("userid", userid) :
                new ObjectParameter("userid", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<proc_test21_Result>("proc_test21", useridParameter);
        }
    
        public virtual ObjectResult<proc_test31_Result> proc_test31(Nullable<int> userid)
        {
            var useridParameter = userid.HasValue ?
                new ObjectParameter("userid", userid) :
                new ObjectParameter("userid", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<proc_test31_Result>("proc_test31", useridParameter);
        }
    
        public virtual ObjectResult<trackApplication_Result> trackApplication(Nullable<int> refid)
        {
            var refidParameter = refid.HasValue ?
                new ObjectParameter("refid", refid) :
                new ObjectParameter("refid", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<trackApplication_Result>("trackApplication", refidParameter);
        }
    
        public virtual ObjectResult<Nullable<int>> sp_checkOldPassword(Nullable<int> user_id, string old_pwd)
        {
            var user_idParameter = user_id.HasValue ?
                new ObjectParameter("user_id", user_id) :
                new ObjectParameter("user_id", typeof(int));
    
            var old_pwdParameter = old_pwd != null ?
                new ObjectParameter("old_pwd", old_pwd) :
                new ObjectParameter("old_pwd", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Nullable<int>>("sp_checkOldPassword", user_idParameter, old_pwdParameter);
        }
    
        public virtual ObjectResult<Nullable<int>> sp_checkOldTransactionPassword(Nullable<int> user_id, string oldt_pwd)
        {
            var user_idParameter = user_id.HasValue ?
                new ObjectParameter("user_id", user_id) :
                new ObjectParameter("user_id", typeof(int));
    
            var oldt_pwdParameter = oldt_pwd != null ?
                new ObjectParameter("oldt_pwd", oldt_pwd) :
                new ObjectParameter("oldt_pwd", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Nullable<int>>("sp_checkOldTransactionPassword", user_idParameter, oldt_pwdParameter);
        }
    
        public virtual int sp_updateLoginPassword(Nullable<int> user_id, string l_pwd)
        {
            var user_idParameter = user_id.HasValue ?
                new ObjectParameter("user_id", user_id) :
                new ObjectParameter("user_id", typeof(int));
    
            var l_pwdParameter = l_pwd != null ?
                new ObjectParameter("l_pwd", l_pwd) :
                new ObjectParameter("l_pwd", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("sp_updateLoginPassword", user_idParameter, l_pwdParameter);
        }
    
        public virtual int sp_updateTransactionPassword(Nullable<int> user_id, string t_pwd)
        {
            var user_idParameter = user_id.HasValue ?
                new ObjectParameter("user_id", user_id) :
                new ObjectParameter("user_id", typeof(int));
    
            var t_pwdParameter = t_pwd != null ?
                new ObjectParameter("t_pwd", t_pwd) :
                new ObjectParameter("t_pwd", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("sp_updateTransactionPassword", user_idParameter, t_pwdParameter);
        }
    
        public virtual ObjectResult<Nullable<int>> proc_sendemail(string email)
        {
            var emailParameter = email != null ?
                new ObjectParameter("email", email) :
                new ObjectParameter("email", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Nullable<int>>("proc_sendemail", emailParameter);
        }
    
        public virtual ObjectResult<proc_sendemail1_Result> proc_sendemail1(string email)
        {
            var emailParameter = email != null ?
                new ObjectParameter("email", email) :
                new ObjectParameter("email", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<proc_sendemail1_Result>("proc_sendemail1", emailParameter);
        }
    
        public virtual int proc_InsertintotblwithEmail(string email, Nullable<int> otp)
        {
            var emailParameter = email != null ?
                new ObjectParameter("email", email) :
                new ObjectParameter("email", typeof(string));
    
            var otpParameter = otp.HasValue ?
                new ObjectParameter("otp", otp) :
                new ObjectParameter("otp", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("proc_InsertintotblwithEmail", emailParameter, otpParameter);
        }
    
        public virtual ObjectResult<proc_OtpCheck2_Result> proc_OtpCheck2(string mail, Nullable<int> otp)
        {
            var mailParameter = mail != null ?
                new ObjectParameter("mail", mail) :
                new ObjectParameter("mail", typeof(string));
    
            var otpParameter = otp.HasValue ?
                new ObjectParameter("otp", otp) :
                new ObjectParameter("otp", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<proc_OtpCheck2_Result>("proc_OtpCheck2", mailParameter, otpParameter);
        }
    
        public virtual ObjectResult<string> proc_resetpssd(string password)
        {
            var passwordParameter = password != null ?
                new ObjectParameter("password", password) :
                new ObjectParameter("password", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<string>("proc_resetpssd", passwordParameter);
        }
    
        public virtual ObjectResult<proc_uptable_Result> proc_uptable(string email)
        {
            var emailParameter = email != null ?
                new ObjectParameter("email", email) :
                new ObjectParameter("email", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<proc_uptable_Result>("proc_uptable", emailParameter);
        }
    
        public virtual ObjectResult<proc_uptable1_Result> proc_uptable1(string email)
        {
            var emailParameter = email != null ?
                new ObjectParameter("email", email) :
                new ObjectParameter("email", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<proc_uptable1_Result>("proc_uptable1", emailParameter);
        }
    
        public virtual int proc_updatepassword(Nullable<int> userid, string password)
        {
            var useridParameter = userid.HasValue ?
                new ObjectParameter("userid", userid) :
                new ObjectParameter("userid", typeof(int));
    
            var passwordParameter = password != null ?
                new ObjectParameter("password", password) :
                new ObjectParameter("password", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("proc_updatepassword", useridParameter, passwordParameter);
        }
    
        public virtual ObjectResult<Nullable<int>> proc_senduserid(string email)
        {
            var emailParameter = email != null ?
                new ObjectParameter("email", email) :
                new ObjectParameter("email", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Nullable<int>>("proc_senduserid", emailParameter);
        }
    
        public virtual ObjectResult<proc_senduserid1_Result1> proc_senduserid1(string email)
        {
            var emailParameter = email != null ?
                new ObjectParameter("email", email) :
                new ObjectParameter("email", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<proc_senduserid1_Result1>("proc_senduserid1", emailParameter);
        }
    
        public virtual ObjectResult<proc_Mini_Statement1_Result> proc_Mini_Statement1(Nullable<int> account, string start_date, string end_date)
        {
            var accountParameter = account.HasValue ?
                new ObjectParameter("account", account) :
                new ObjectParameter("account", typeof(int));
    
            var start_dateParameter = start_date != null ?
                new ObjectParameter("start_date", start_date) :
                new ObjectParameter("start_date", typeof(string));
    
            var end_dateParameter = end_date != null ?
                new ObjectParameter("end_date", end_date) :
                new ObjectParameter("end_date", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<proc_Mini_Statement1_Result>("proc_Mini_Statement1", accountParameter, start_dateParameter, end_dateParameter);
        }
    
        public virtual ObjectResult<proc_Recent_Transactions_Result> proc_Recent_Transactions(Nullable<int> account)
        {
            var accountParameter = account.HasValue ?
                new ObjectParameter("account", account) :
                new ObjectParameter("account", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<proc_Recent_Transactions_Result>("proc_Recent_Transactions", accountParameter);
        }
    
        public virtual int proc_InsertintotblwithEmailadmin(string email, Nullable<int> otp)
        {
            var emailParameter = email != null ?
                new ObjectParameter("email", email) :
                new ObjectParameter("email", typeof(string));
    
            var otpParameter = otp.HasValue ?
                new ObjectParameter("otp", otp) :
                new ObjectParameter("otp", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("proc_InsertintotblwithEmailadmin", emailParameter, otpParameter);
        }
    
        public virtual ObjectResult<proc_OtpCheckadmin_Result> proc_OtpCheckadmin(string mail, Nullable<int> otp)
        {
            var mailParameter = mail != null ?
                new ObjectParameter("mail", mail) :
                new ObjectParameter("mail", typeof(string));
    
            var otpParameter = otp.HasValue ?
                new ObjectParameter("otp", otp) :
                new ObjectParameter("otp", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<proc_OtpCheckadmin_Result>("proc_OtpCheckadmin", mailParameter, otpParameter);
        }
    
        public virtual ObjectResult<proc_GetPendingApplications_Result> proc_GetPendingApplications()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<proc_GetPendingApplications_Result>("proc_GetPendingApplications");
        }
    
        public virtual ObjectResult<proc_RejectedApplications_Result> proc_RejectedApplications()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<proc_RejectedApplications_Result>("proc_RejectedApplications");
        }
    
        public virtual ObjectResult<proc_GetApprovedCustomers_Result> proc_GetApprovedCustomers()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<proc_GetApprovedCustomers_Result>("proc_GetApprovedCustomers");
        }
    
        public virtual int proc_InsertApprvCustomersinBankingTble(Nullable<int> id, Nullable<long> acc_number, Nullable<System.DateTime> acc_date)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("id", id) :
                new ObjectParameter("id", typeof(int));
    
            var acc_numberParameter = acc_number.HasValue ?
                new ObjectParameter("acc_number", acc_number) :
                new ObjectParameter("acc_number", typeof(long));
    
            var acc_dateParameter = acc_date.HasValue ?
                new ObjectParameter("acc_date", acc_date) :
                new ObjectParameter("acc_date", typeof(System.DateTime));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("proc_InsertApprvCustomersinBankingTble", idParameter, acc_numberParameter, acc_dateParameter);
        }
    
        public virtual ObjectResult<proc_GetCustomersProfilesbyReferenceid_Result> proc_GetCustomersProfilesbyReferenceid(Nullable<int> id)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("id", id) :
                new ObjectParameter("id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<proc_GetCustomersProfilesbyReferenceid_Result>("proc_GetCustomersProfilesbyReferenceid", idParameter);
        }
    
        public virtual ObjectResult<proc_GetheCustomerApplications_Result> proc_GetheCustomerApplications()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<proc_GetheCustomerApplications_Result>("proc_GetheCustomerApplications");
        }
    
        public virtual ObjectResult<proc_LoginCheck_Result> proc_LoginCheck(string id, string pass)
        {
            var idParameter = id != null ?
                new ObjectParameter("id", id) :
                new ObjectParameter("id", typeof(string));
    
            var passParameter = pass != null ?
                new ObjectParameter("pass", pass) :
                new ObjectParameter("pass", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<proc_LoginCheck_Result>("proc_LoginCheck", idParameter, passParameter);
        }
    
        public virtual ObjectResult<proc_GetdetailsForMail_Result> proc_GetdetailsForMail(string email)
        {
            var emailParameter = email != null ?
                new ObjectParameter("email", email) :
                new ObjectParameter("email", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<proc_GetdetailsForMail_Result>("proc_GetdetailsForMail", emailParameter);
        }
    
        public virtual ObjectResult<string> sp_getEmailId(Nullable<int> customerId)
        {
            var customerIdParameter = customerId.HasValue ?
                new ObjectParameter("customerId", customerId) :
                new ObjectParameter("customerId", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<string>("sp_getEmailId", customerIdParameter);
        }
    
        public virtual int proc_Insertbalance(Nullable<int> customerid, Nullable<int> accountno, Nullable<int> balance)
        {
            var customeridParameter = customerid.HasValue ?
                new ObjectParameter("customerid", customerid) :
                new ObjectParameter("customerid", typeof(int));
    
            var accountnoParameter = accountno.HasValue ?
                new ObjectParameter("accountno", accountno) :
                new ObjectParameter("accountno", typeof(int));
    
            var balanceParameter = balance.HasValue ?
                new ObjectParameter("balance", balance) :
                new ObjectParameter("balance", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("proc_Insertbalance", customeridParameter, accountnoParameter, balanceParameter);
        }
    
        public virtual int proc_Insertbalance1(Nullable<int> customerid, Nullable<int> accountno, Nullable<int> balance)
        {
            var customeridParameter = customerid.HasValue ?
                new ObjectParameter("customerid", customerid) :
                new ObjectParameter("customerid", typeof(int));
    
            var accountnoParameter = accountno.HasValue ?
                new ObjectParameter("accountno", accountno) :
                new ObjectParameter("accountno", typeof(int));
    
            var balanceParameter = balance.HasValue ?
                new ObjectParameter("balance", balance) :
                new ObjectParameter("balance", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("proc_Insertbalance1", customeridParameter, accountnoParameter, balanceParameter);
        }
    }
}
