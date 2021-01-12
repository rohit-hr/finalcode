import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../models/bankingreg.model';
import { UserOtp } from '../models/userotp.model';
import { UserProfile } from '../models/userprofile.model';
import { ForgotPasswordService } from '../services/forgotpassword.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  showModal : boolean=false;
  email:any;
  otp:any;
  result:any;
  msg:any;
  userotp:UserOtp;
  userprofile:UserProfile;
  customer:UserOtp;
  userid:any;

  constructor(private forgotpssdservice:ForgotPasswordService, private route:Router) { 
    this.userotp = new UserOtp();
    this.userprofile = new UserProfile();
    this.customer = new UserOtp();
    
  }

  changepassword(){
    this.showModal=true;
     console.log(this.email);
     localStorage.setItem("userid",this.userid);
     console.log(this.userid);
     this.customer.email_id=this.email;
     console.log(this.customer);
     this.forgotpssdservice.ForgotPasswordUsingApi(this.customer).subscribe();
   }

   checkotp(){
    this.userotp.email_id=this.email;
    this.userotp.otp=this.otp;
    console.log(this.userotp);
    localStorage.setItem("mail",this.userotp.email_id)
    this.forgotpssdservice.ChangePasswordUsingApi(this.userotp).subscribe(data=>{this.result=data,console.log(data);
    if(this.result!=null)
     {this.route.navigate(["changepassword"]);}},error=>this.msg=error.error.Message);
     
  }

  ngOnInit(): void {
  }

}
