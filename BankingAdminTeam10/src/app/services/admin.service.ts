import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { timeStamp } from "console";
import { Admin } from "../models/admin.model";
import { AdminOtp } from "../models/adminotp.model";
import { Customer } from "../models/customer.model";

@Injectable()
export class AdminService{
    constructor(private httpclient:HttpClient){
        
    }
    public LoginCheckUsingApi(admin:Admin){
      return this.httpclient.post("http://localhost:63882/api/Admin",admin);
    }
    public GetCustomerNamesUsingApi(){
      return this.httpclient.get("http://localhost:63882/api/Admin");
    }
    public GetCustomerProfile(id:any){
       return this.httpclient.get("http://localhost:63882/api/Admin/"+id);
    }
    public UpdateStatusUsingApi(id:any,customer:any){
      return this.httpclient.put("http://localhost:63882/api/Admin/"+id,customer);
    }
    public UpdateRejecedStatusUsingApi(customer:any){
      return this.httpclient.put("http://localhost:63882/divya/UpdateRejectedStatusApplications/",customer);
    }
    public GetApprovedApplications(){
        return this.httpclient.get("http://localhost:63882/divya/ApprovedApplications");
    }

    public GetPendingApplications(){
      return this.httpclient.get("http://localhost:63882/divya/PendingApplications");
    }
    public GetRejectedApplications(){
      return this.httpclient.get("http://localhost:63882/divya/RejectedApplications");
    }

    public ForgotPasswordUsingApi(admin:AdminOtp){
      return this.httpclient.post("http://localhost:63882/divya/forgotPassword/",admin);
    }
    public ChangePasswordUsingApi(admin:AdminOtp){
      return this.httpclient.post("http://localhost:63882/divya/changePassword/",admin)
    }
    public UpdatePassword(admin:Admin){
      return this.httpclient.put("http://localhost:63882/divya/UpdatePassword",admin);
    }
    public SendMailsUsingApi(customer:Customer){
      return this.httpclient.post("http://localhost:63882/divya/sendmails/",customer);
    }
    public SendUsernamesusingApi(admin:Admin){
      return this.httpclient.post("http://localhost:63882/divya/sendusername/",admin);
    }

}