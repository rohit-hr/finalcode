import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Admin } from '../models/admin.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  admin:Admin;
  resultadmin:any;
  msg:any;
  myForm:FormGroup;
  constructor(private adminservice:AdminService,private route:Router,private authService:AuthService) { 
    this.admin=new Admin();
    this.myForm=new FormGroup({
      username:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required])
    });
  
  }
  public get username():any{
    return this.myForm.get("username");
  }
  public get password():any{
   return this.myForm.get("password");
 }
 onLogin(){
  if(this.myForm.valid)
  {
    var user:Admin=new Admin();
     localStorage.setItem("admin",this.myForm.value["username"]);
     console.log(this.myForm.value["username"]);
     user.admin_id=this.username.value;
     user.password=this.password.value;
     this.adminservice.LoginCheckUsingApi(user).subscribe(data=>{this.resultadmin=data;if(this.resultadmin!=null)
      {
        this.authService.login(this.myForm.value);
        this.route.navigate(["adminhome"]);
      }else{this.msg="Invalid Admin";}
      },error=>this.msg=error.error.Message);
  }
}
 

  ngOnInit(): void {
  }

}
