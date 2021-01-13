import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../models/admin.model';
import { AdminOtp } from '../models/adminotp.model';
import { AdminService } from '../services/admin.service';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  newpassword1:any;
  confirmpassword1:any;
  resmessage:any;
  mail:any;
  resadmin:Admin;
  showModel:boolean=false;
  flag:any;
  myForm:FormGroup;
  constructor(private adminservice:AdminService,private route:Router) {
    this.resadmin=new Admin();
    this.myForm=new FormGroup({
      newpassword:new FormControl(null,[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$")]),
      confirmpassword:new FormControl(null,[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$")])
    });
   }
   
   public get newpassword():any{
    return this.myForm.get("newpassword");
    }
  public get confirmpassword():any{
   return this.myForm.get("confirmpassword");
  }

  ngOnInit(): void {
  }
  submit(){
    this.newpassword1=this.myForm.value["newpassword"];
    this.confirmpassword1=this.myForm.value["confirmpassword"];
    
    if(this.confirmpassword1==this.newpassword1)
    {
     
      this.mail=localStorage.getItem("mail");
      this.resadmin.password=this.confirmpassword1;
      this.resadmin.email_id=this.mail;
      console.log(this.resadmin)
      if(this.adminservice.UpdatePassword(this.resadmin).subscribe()){
        this.showModel=true;
        this.flag=1;
      }
      
    }
    else
    {
      this.resmessage="both the passwords are not same !please check";
    }
  }
  home(){
    this.showModel=false;
    this.route.navigate(["home"]);
  }

}
