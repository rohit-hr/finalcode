import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Password } from '../models/password.model';
import { PasswordService } from '../services/password.service';

@Component({
  selector: 'app-change-transaction-password',
  templateUrl: './change-transaction-password.component.html',
  styleUrls: ['./change-transaction-password.component.css']
})
export class ChangeTransactionPasswordComponent implements OnInit {

  userPwd:Password;
  user:any;
  old:any;
  msg:any;
  newpwd:Password;

  constructor(private passwordService:PasswordService, private route:Router) { 
    this.userPwd = new Password();
    this.newpwd = new Password();
  }

  ok()
   {
     this.passwordService.CheckOldTransactionPassword(this.userPwd.user_id,this.userPwd)
     .subscribe(p => {this.old = p,console.log(p),this.msg=undefined},errmsg=>this.msg=errmsg.error.Message);
   }

  updateLoginPassword()
  {
    this.passwordService.ChangeTransactionPasswordfromApi(this.userPwd.user_id,this.newpwd).
    subscribe(p => {this.user = p,console.log("Method called");this.route.navigate(["dash"]);});
  }

  ngOnInit(): void {
  }

}
