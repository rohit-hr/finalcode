import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin.model';
import { AdminOtp } from '../models/adminotp.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
 admin:AdminOtp;
 adminotp:AdminOtp;
 otp:any;
 result:any;
 msg:any;
 showModal : boolean=false;
 myForm:FormGroup;
  constructor(private adminservice:AdminService,private route:Router) { 
    this.admin=new AdminOtp();
    this.adminotp=new AdminOtp();
    this.myForm=new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      confirmemail:new FormControl(null,[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
    });
   
  }
 
  public get email():any{
    return this.myForm.get("email");
  }
  public get confirmemail():any{
    return this.myForm.get("confirmemail");
  }

  changepassword(){
   this.showModal=true;
    console.log(this.email);
    this.admin.email_id=this.myForm.value["confirmemail"];
    console.log(this.admin);
    this.adminservice.ForgotPasswordUsingApi(this.admin).subscribe();
  }
  checkotp(){
    this.adminotp.email_id=this.myForm.value["confirmemail"];
    this.adminotp.otp=this.otp;
    console.log(this.adminotp);
    localStorage.setItem("mail",this.adminotp.email_id)
    this.adminservice.ChangePasswordUsingApi(this.adminotp).subscribe(data=>{this.result=data,console.log(data);
    if(this.result!=null)
     {this.route.navigate(["changepassword"]);}},error=>this.msg=error.error.Message);
     
  }


  ngOnInit(): void {
  }

}
