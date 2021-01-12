import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin:User;
  
  user:any;
  msg:any;
  constructor(private userService:UserService,private route:Router) {
      this.userLogin = new User();
   }

   onLogin()
   {
     localStorage.setItem("userid",this.userLogin.user_id);
    this.userService.LoginCheckUsingApi(this.userLogin).subscribe(
      u=>{this.user = u,this.msg=undefined;this.route.navigate(["dash"]);},
      err=>this.msg = err.error.Message );
   }

  ngOnInit(): void {
  }

}
