import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../models/bankingreg.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-bankingreg',
  templateUrl: './bankingreg.component.html',
  styleUrls: ['./bankingreg.component.css']
})
export class BankingregComponent implements OnInit {

  customer:Customer;
  cust:any;
  msg:any;
  showModel:boolean=false;
  flag:any;
  constructor(private userreg:UserService, private route:Router) { 
    this.customer = new Customer();
  }

  InsertCustomer()
  {
    // this.userreg.addCustomer(this.customer).subscribe(data=>console.log(data));
    this.userreg.addCustomer(this.customer).subscribe(u=>{this.cust=u;this.msg=undefined},errmsg=>this.msg=errmsg.error.Message);
    this.showModel=true;
    this.flag=1;
    // ;this.route.navigate(["home"]);
  }

  home()
  {
    console.log(this.customer);
    this.userreg.sendEmail(this.customer).subscribe();
    this.showModel=false;
    this.route.navigate(["home"]);
  }


  ngOnInit(): void {
  }
}
