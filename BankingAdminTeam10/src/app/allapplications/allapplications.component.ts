import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { Customer } from '../models/customer.model';
import { AdminService } from '../services/admin.service';


@Component({
  selector: 'app-allapplications',
  templateUrl: './allapplications.component.html',
  styleUrls: ['./allapplications.component.css']
})
export class AllapplicationsComponent implements OnInit {
  Customers:any;
  msg:any;
  CustomerProfile:any;
  id:any;
  flag:any;
  customer1:Customer;
  admin_id:any;
  showModal : boolean=false;
  show:boolean=false;
  email:any;
  displayedColumns = ['Reference_id','Name'];
  constructor(private adminservice:AdminService,private route:Router) {
    this.adminservice.GetCustomerNamesUsingApi().subscribe(data=>{this.Customers=data,this.id=this.Customers.Reference_id});
    this.customer1=new Customer();
    
  }
  getCustomerProfile(Reference_id:any){   
    this.showModal=true;
    //console.log(Reference_id);
    //this.route.navigate(["customerprofile",Reference_id]);
    this.adminservice.GetCustomerProfile(Reference_id).subscribe(data=>{this.CustomerProfile=data,console.log(this.CustomerProfile);});
  }
  UpdateStatus(customer:any){
    this.admin_id=localStorage.getItem("admin");
    //console.log(this.admin_id);
    //console.log(customer);
    localStorage.setItem("rescust",customer.email_id);
    if(this.adminservice.UpdateStatusUsingApi(this.admin_id,customer).subscribe()){
      this.show=true;
      this.flag=1;
    }
  }
 updateRejectStatus(cust:any){
   this.adminservice.UpdateRejecedStatusUsingApi(cust).subscribe();
  }
  hide(){
    this.showModal = false;
  }
  adminhome(){
    this.show=false;    
  }
  sendmail(){
    this.show=false;
    this.email=localStorage.getItem("rescust");
    this.customer1.email_id=this.email;
    console.log(this.customer1);
    this.adminservice.SendMailsUsingApi(this.customer1).subscribe();
  }
  
  ngOnInit(): void {
  }

}
