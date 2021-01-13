import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from 'src/app/models/transaction.model';
import { EmailtransactionService } from 'src/app/services/emailtransaction.service';
import { Emailtransaction } from 'src/app/models/emailtransaction.model';

@Component({
  selector: 'app-rtgspayment',
  templateUrl: './rtgspayment.component.html',
  styleUrls: ['./rtgspayment.component.css']
})
export class RtgspaymentComponent implements OnInit {
  rtgsPaymentForm:FormGroup=new FormGroup({});
  submitted = false;
  notAdded = false;
  transaction:Transaction;
  message:string="";
  fromAccount:any;
  userId:string |null;
  accountNo:string|null;
  beneficiaries:any;
  emailtransaction:Emailtransaction;
  transactionPassword:any;
  notMatched=false;
  emailId:any;

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
    console.log
    this.transactionService.getBeneficiaries(this.accountNo).subscribe(b=>
      {
        console.log(b);
        this.beneficiaries=b;
      });
   }

  ngOnInit(): void {
    this.rtgsPaymentForm = this.formBuilder.group({
      fromAccount: ['', Validators.required],
      toAccount: ['', Validators.required],
      amount: ['', [Validators.required,Validators.min(200000),Validators.max(1000000)]],
      // transDate: ['',Validators.required],
      remark: ['', Validators.required],
      password:['', Validators.required]
  });
  }
  get f() { return this.rtgsPaymentForm.controls; }
  initiatePayment(){
    this.submitted = true;
    this.notAdded = false;
    if(this.rtgsPaymentForm.invalid){
      return;
    }
    else{
      this.transactionService.getTransactionPassword(this.userId).subscribe(p=>
        {
          console.log(p);
          this.transactionPassword=p;
          console.log(this.transactionPassword);
          if(this.rtgsPaymentForm.value["password"]==null){
            this.notMatched=false;
          }
          else{
            if(this.rtgsPaymentForm.value["password"]!=this.transactionPassword){
              this.notMatched=true;
            }
            else
            {
          this.transaction.transaction_type="RTGS";
          this.transaction.from_account = this.rtgsPaymentForm.value["fromAccount"];
          this.transaction.to_account = this.rtgsPaymentForm.value["toAccount"]
          this.transaction.amount = this.rtgsPaymentForm.value["amount"];
          // this.transaction.transaction_date = this.rtgsPaymentForm.value["transDate"];
          this.transaction.remarks = this.rtgsPaymentForm.value["remark"];
          this.transactionService.initiateTransaction(this.transaction).subscribe(t=>
            {
              console.log(t);
              this.transactionService.getEmailId(this.userId).subscribe(e=>{
                this.emailId=e;
                this.emailtransaction.email_Id=this.emailId;
              this.emailtransaction.subject="Payment Transaction Successful";
              this.emailtransaction.body="Your account with RDNS Bank "+this.transaction.from_account+" was debited with Rs. "+this.transaction.amount+" via RTGS to "+this.transaction.to_account;
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
              
              this.router.navigateByUrl('/transactionfailed/'+this.message+'/'+"RTGS");
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
                  
                  this.router.navigateByUrl('/transactionfailed/'+this.message+'/'+"RTGS");
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
    this.rtgsPaymentForm.reset();
    this.rtgsPaymentForm.reset(this.rtgsPaymentForm.value["fromAccount"]);
    this.rtgsPaymentForm.reset(this.rtgsPaymentForm.value["toAccount"]);
  }

}
