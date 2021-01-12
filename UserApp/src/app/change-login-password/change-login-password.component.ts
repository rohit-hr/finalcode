import { Component, OnInit } from '@angular/core';
import { Password } from '../models/password.model';
import { PasswordService } from '../services/password.service';
import{CustomValidators} from '../custom-validators'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-login-password',
  templateUrl: './change-login-password.component.html',
  styleUrls: ['./change-login-password.component.css']
})
export class ChangeLoginPasswordComponent implements OnInit {

  //public form: FormGroup;
  userPwd:Password;
  user:any;
  msg:any;
  newpwd:Password;
  old:any;
  constructor(private fb: FormBuilder,private passwordService:PasswordService, private route:Router) { 
    //this.form = this.createLoginPassForm();
    this.userPwd = new Password();
    this.newpwd = new Password();
  }
  // createLoginPassForm():FormGroup{
  //   return this.fb.group(
  //     {
  //       user_id:[
  //         null,Validators.compose([Validators.required])
  //       ],

  //       password: [
  //         null,
  //         Validators.compose([
  //           Validators.required,
  //           CustomValidators.patternValidator(/[A-Z]/, {hasCapitalCase: true}),
  //           CustomValidators.patternValidator(/[a-z]/, {hasSmallCase: true}),
  //           CustomValidators.patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,{hasSpecialCharacters: true}),
  //           Validators.minLength(8),
  //         ])
  //       ]
  //     }
  //   )

  // }

  // public get user_id():any{
  //   return this.form.get("user_id")
  // }

  // public get password():any{
  //   return this.form.get("password")
  // }



  ok()
  {
   this.passwordService.CheckOldPassword(this.userPwd.user_id,this.userPwd)
   .subscribe(p => {this.old = p,console.log(p),this.msg=undefined},errmsg=>this.msg=errmsg.error.Message);
   //this.route.navigate(["changeloginpwd"]);
  }
 
 updateLoginPassword()
 {
   this.passwordService.ChangeLoginPasswordfromApi(this.userPwd.user_id,this.newpwd)
   .subscribe(p => {this.user = p,console.log("method called"),this.msg=undefined;this.route.navigate(["dash"]);},errmsg=>this.msg=errmsg.error.Message);

 }

  ngOnInit(): void {
  }

}
