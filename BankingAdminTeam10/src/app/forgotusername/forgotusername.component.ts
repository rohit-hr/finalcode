import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../models/admin.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-forgotusername',
  templateUrl: './forgotusername.component.html',
  styleUrls: ['./forgotusername.component.css']
})
export class ForgotusernameComponent implements OnInit {
 email:any;
 admin:Admin;
 flag:any;
 showModel:boolean=false;
  constructor(private adminservice:AdminService,private route:Router) {
    this.admin=new Admin();
   }



  getUsername(){
     this.admin.email_id=this.email;
     if(this.adminservice.SendUsernamesusingApi(this.admin).subscribe())
     {  
       this.flag=1;
       this.showModel=true;

     }
    
  }
  home(){
    this.showModel=false;
    this.route.navigate(["home"]);
  }
  ngOnInit(): void {
  }

}
