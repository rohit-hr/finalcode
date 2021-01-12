import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { UserOtp } from "../models/userotp.model";
import { UserProfile } from "../models/userprofile.model";

@Injectable()
export class ForgotPasswordService{
    constructor(private httpclient:HttpClient) {}


    public ForgotPasswordUsingApi(user:UserOtp){
        return this.httpclient.post("http://localhost:63882/reset/forgotPassword/",user);
      }
      public ChangePasswordUsingApi(user:UserOtp){
        return this.httpclient.post("http://localhost:63882/reset/changePassword/",user)
      }
      public UpdatePassword(user:User){
        return this.httpclient.put("http://localhost:63882/reset/UpdatePassword",user);
      }
      public SendUserID(userprofile:UserProfile){
        return this.httpclient.post("http://localhost:63882/reset/senduserid/",userprofile);
      }
}