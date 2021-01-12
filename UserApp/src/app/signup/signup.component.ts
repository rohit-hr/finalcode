import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../custom-validators';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
// export class SignupComponent implements OnInit {

//   user:User;
//   user1:any;
//   constructor(private userService:UserService,private route:Router) { 
//     this.user = new User();
//   }

//   Insert()
//    {
//      console.log(this.user.user_id)
//      this.userService.PosttblNetBanking(this.user).subscribe(u => {this.user1= u,console.log(u)})
   
//       this.route.navigate(["login"]);
   
     
//    }
//   ngOnInit(): void {
//   }

// }

export class SignupComponent {
  public frmSignup: FormGroup;
  custibreg:User;
  msg:any;
  ibreg:any;

  constructor(private fb: FormBuilder, private ibregservice:UserService, private route:Router) {
    this.frmSignup = this.createSignupForm();
    this.custibreg = new User();

  }

  createSignupForm(): FormGroup {
    return this.fb.group(
      {
        userid:[
          null, Validators.compose([Validators.required])
        ],
        accno: [
          null,
          Validators.compose([Validators.required])
        ],
        password: [
          null,
          Validators.compose([
            Validators.required,
            CustomValidators.patternValidator(/\d/, {hasNumber: true}),
            CustomValidators.patternValidator(/[A-Z]/, {hasCapitalCase: true}),
            CustomValidators.patternValidator(/[a-z]/, {hasSmallCase: true}),
            CustomValidators.patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,{hasSpecialCharacters: true}),
            Validators.minLength(8),
          ])
        ],
        confirmPassword: [null, Validators.compose([Validators.required])],
        tranpassword: [
          null,
          Validators.compose([
            Validators.required,
            CustomValidators.patternValidator(/\d/, {hasNumber: true}),
            CustomValidators.patternValidator(/[A-Z]/, {hasCapitalCase: true}),
            CustomValidators.patternValidator(/[a-z]/, {hasSmallCase: true}),
            CustomValidators.patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,{hasSpecialCharacters: true}),
            Validators.minLength(8)
          ])
        ],
        tranconfirmPassword: [null, Validators.compose([Validators.required])]
      },
      {
        validator: (CustomValidators.passwordMatchValidator)
      },
    );
  }

  public get userid():any
  {
    return this.frmSignup.get("userid");
  }

  public get accname():any{
    return this.frmSignup.get("accno");
  }

  public get pass():any
  {
    return this.frmSignup.get("confirmPassword");
  }

  public get tranpass():any
  {
    return this.frmSignup.get("tranconfirmPassword");
  }

  submit()
  {
    this.custibreg.user_id=this.userid.value;
    this.custibreg.account_number=this.accname.value;
    this.custibreg.password=this.pass.value;
    this.custibreg.transaction_password=this.tranpass.value;
    this.ibregservice.InternetBankingRegistration(this.custibreg).subscribe(u=>{this.ibreg=u;this.msg=undefined;this.route.navigate(["login"]);},
    errmsg=>this.msg=errmsg.error.Message);
    
    // this.ibregservice.InternetBankingRegistration(this.custibreg).subscribe(el=>{console.log('Value Received '+el)},
    // err=>{console.log(err)},()=>console.log("Processing Complete"));
  }
}
