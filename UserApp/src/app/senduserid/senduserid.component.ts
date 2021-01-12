import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile } from '../models/userprofile.model';
import { ForgotPasswordService } from '../services/forgotpassword.service';

@Component({
  selector: 'app-senduserid',
  templateUrl: './senduserid.component.html',
  styleUrls: ['./senduserid.component.css']
})
export class SenduseridComponent implements OnInit {

  userprofile:UserProfile;
  email:any;
  showModel:any;
  flag:any;
  constructor(private forgotpssd:ForgotPasswordService, private route:Router) {
    this.userprofile = new UserProfile();
   }

  ngOnInit(): void {
  }

  senduserid()
  {
    this.userprofile.email_id=this.email;
    if(this.forgotpssd.SendUserID(this.userprofile).subscribe())
    {
      this.showModel=true;
      this.flag=1;
    }

  }

  home()
  {
    this.showModel=false;
    this.route.navigate(["login"]);
  }
}
