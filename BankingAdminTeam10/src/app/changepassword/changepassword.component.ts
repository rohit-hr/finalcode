import { Component, OnInit } from '@angular/core';
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

  newpassword:any;
  confirmpassword:any;
  resmessage:any;
  mail:any;
  resadmin:Admin;
  showModel:boolean=false;
  flag:any;
  constructor(private adminservice:AdminService,private route:Router) {
    this.resadmin=new Admin();
   }

  ngOnInit(): void {
  }
  submit(){
    
    if(this.confirmpassword==this.newpassword)
    {
     
      this.mail=localStorage.getItem("mail");
      this.resadmin.password=this.confirmpassword;
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
