import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { ForgotPasswordService } from '../services/forgotpassword.service';

@Component({
  selector: 'app-forgot-change-password',
  templateUrl: './forgot-change-password.component.html',
  styleUrls: ['./forgot-change-password.component.css']
})
export class ForgotChangePasswordComponent implements OnInit {

  confirmpassword:any;
  newpassword:any;
  user:User;
  mail:any;
  showModel:any;
  userid:any;
  resmessage:any;
  flag:any;
  
  constructor(private forgotpssd:ForgotPasswordService, private route:Router) { 
    this.user = new User();
  }

  ngOnInit(): void {
  }

  submit(){
    
    if(this.confirmpassword==this.newpassword)
    {
      this.userid=localStorage.getItem("userid");
      // this.mail=localStorage.getItem("mail");
      this.user.password=this.confirmpassword;
      this.user.user_id=this.userid;
      console.log(this.user);
      if(this.forgotpssd.UpdatePassword(this.user).subscribe()){
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
