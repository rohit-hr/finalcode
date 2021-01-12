// import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from 'src/app/models/transaction.model';
import { Emailtransaction } from 'src/app/models/emailtransaction.model';
import { EmailtransactionService } from 'src/app/services/emailtransaction.service';

@Component({
  selector: 'app-impspayment',
  templateUrl: './impspayment.component.html',
  styleUrls: ['./impspayment.component.css']
})
export class ImpspaymentComponent implements OnInit {
  impsPaymentForm:FormGroup=new FormGroup({});
  submitted = false;
  notAdded = false;
  transaction:Transaction;
  message:string="";
  fromAccount:any;
  userId:string |null;
  accountNo:string|null;
  beneficiaries:any;
  transactionPassword:any;
  notMatched=false;
  password:string="";
  emailtransaction:Emailtransaction;
  emailId:any;
 
  // currentDate:Date=Date.prototype.getDate();
  constructor(private formBuilder:FormBuilder,private router:Router,private transactionService:TransactionService,private emailTransactionService:EmailtransactionService) { 
    this.transaction=new Transaction();
    this.emailtransaction=new Emailtransaction();
    this.userId=localStorage.getItem("userid");
    console.log(this.userId);
    this.transactionService.getAccountNumber(this.userId).subscribe(a=>{
      console.log(a);
      this.fromAccount=a;
      localStorage.setItem("accountNo",this.fromAccount);
    });
    this.accountNo=localStorage.getItem("accountNo");
    console.log(this.accountNo);
    this.transactionService.getBeneficiaries(this.accountNo).subscribe(b=>
      {
        console.log(b);
        this.beneficiaries=b;
      });
      
  }

  ngOnInit(): void {
    this.impsPaymentForm = this.formBuilder.group({
      fromAccount: ['', Validators.required],
      toAccount: ['', Validators.required],
      amount: ['', Validators.required],
      // transDate: ['',Validators.required],
      remark: ['', Validators.required],
      password:['', Validators.required]
  });
  }
  get f() { return this.impsPaymentForm.controls; }
  initiatePayment(){
    this.notAdded = false;
    this.submitted = true;
    this.notMatched=false;
    if(this.impsPaymentForm.invalid){
      return;
    }
    else{
      this.transactionService.getTransactionPassword(this.userId).subscribe(p=>
        {
          console.log(p);
          this.transactionPassword=p;
          console.log(this.transactionPassword);
          if(this.impsPaymentForm.value["password"]==null){
            this.notMatched=false;
          }
          else{
            if(this.impsPaymentForm.value["password"]!=this.transactionPassword){
              this.notMatched=true;
            }
            else
            {
              this.transaction.transaction_type="IMPS";
            this.transaction.from_account = this.impsPaymentForm.value["fromAccount"];
            this.transaction.to_account = this.impsPaymentForm.value["toAccount"]
            this.transaction.amount = this.impsPaymentForm.value["amount"];
            // this.transaction.transaction_date = this.impsPaymentForm.value["transDate"];
            this.transaction.remarks = this.impsPaymentForm.value["remark"];
            this.transactionService.initiateTransaction(this.transaction).subscribe(t=>
              {
                console.log(t);
                this.transactionService.getEmailId(this.userId).subscribe(e=>{
                  this.emailId=e;
                  this.emailtransaction.email_Id=this.emailId;
                this.emailtransaction.subject="Payment Transaction Successful";
                this.emailtransaction.body="Your last transaction was successful";
                this.emailTransactionService.sendTransactionEmail(this.emailtransaction).subscribe(e=>console.log(t));
                });
                this.router.navigateByUrl('/transfersuccessful/'+this.transaction.from_account);
              },
            error=>{
              this.message=error.error.Message;
              if(this.message=="Your transaction failed due to insufficient balance. Please try again."){
                console.log(this.message);
                this.transactionService.getEmailId(this.userId).subscribe(e=>{
                  this.emailId=e;
                  this.emailtransaction.email_Id=this.emailId;
                this.emailtransaction.subject="Payment Transaction Failed";
                this.emailtransaction.body="Your last transaction failed due to Insufficient Balance";
                this.emailTransactionService.sendTransactionEmail(this.emailtransaction).subscribe(e=>console.log(e));
                });
                this.router.navigateByUrl('/transactionfailed/'+this.message+'/'+"IMPS");
              }
              else{
                if(this.message=="Beneficiary Account Number not added"){
                  console.log(this.message);
                  this.notAdded=true;
                }
                else{
                  if(this.message=="Something Went Wrong. Unable to process your transaction. Please try again."){
                    console.log(this.message);
                    this.transactionService.getEmailId(this.userId).subscribe(e=>{
                      this.emailId=e;
                      this.emailtransaction.email_Id=this.emailId;
                   this.emailtransaction.subject="Payment Transaction Failed";
                   this.emailtransaction.body="Your last transaction failed due to an unexpected error";
                   this.emailTransactionService.sendTransactionEmail(this.emailtransaction).subscribe(e=>console.log(e));
                      });
                    this.router.navigateByUrl('/transactionfailed/'+this.message+'/'+"IMPS");
                  }
                }
              }
            });
            }
          }
        });
    }
  }
  onReset()
  {
    this.submitted=false;
    this.impsPaymentForm.reset();
    this.impsPaymentForm.reset(this.impsPaymentForm.value["fromAccount"]);
    this.impsPaymentForm.reset(this.impsPaymentForm.value["toAccount"]);
  }
}
