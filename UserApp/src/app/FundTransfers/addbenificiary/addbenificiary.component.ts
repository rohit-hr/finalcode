import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Beneficiary } from 'src/app/models/beneficiary.model';
import { BeneficiaryService } from 'src/app/services/beneficiary.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-addbenificiary',
  templateUrl: './addbenificiary.component.html',
  styleUrls: ['./addbenificiary.component.css']
})
export class AddbenificiaryComponent implements OnInit {
  addBeneficiaryForm:FormGroup=new FormGroup({});
  submitted = false;
  hasError=false;
  notMatched=false;
  userId:string |null;
  accountNo:string|null;
  fromAccount:any;
  beneficiary:Beneficiary;
  message:string="";

  constructor(private formBuilder: FormBuilder,private transactionService:TransactionService,private beneficiaryService:BeneficiaryService,private router:Router) { 
    this.beneficiary=new Beneficiary();
    this.userId=localStorage.getItem("userid");
    console.log(this.userId);
    this.transactionService.getAccountNumber(this.userId).subscribe(a=>{
      console.log(a);
      this.fromAccount=a;
      localStorage.setItem("accountNo",this.fromAccount);
    });
    this.accountNo=localStorage.getItem("accountNo");
    console.log(this.accountNo);
  }
  
  ngOnInit(): void {
    this.addBeneficiaryForm = this.formBuilder.group({
      beneficiaryName: ['', [Validators.required,Validators.pattern("^[A-Za-z]{1,}$")]],
      acntNo: ['', [Validators.required,Validators.pattern("^[0-9]{8,15}$")]],
      reacntNo: ['', Validators.required],
      saveBeneficiary: [''],
      nickName: ['', Validators.pattern("^[a-zA-Z]{1,}$")]
  });
  }
  get f() { return this.addBeneficiaryForm.controls; }

  saveBeneficiary(){
    this.submitted=true;
    this.hasError = false;
    this.notMatched=false;
    if(this.addBeneficiaryForm.invalid){
      return;
    }
    else{
      if(this.addBeneficiaryForm.value["acntNo"]!=this.addBeneficiaryForm.value["reacntNo"]){
        this.notMatched=true;
        return;
      }
      this.beneficiary.account_number=Number(this.accountNo);
      console.log(this.beneficiary.account_number);
      this.beneficiary.beneficiary_account_number = this.addBeneficiaryForm.value["acntNo"];
      this.beneficiary.nickname = this.addBeneficiaryForm.value["nickName"];
      this.beneficiaryService.addBeneficiary(this.beneficiary).subscribe(b=>{
        console.log(b);
        alert("Beneficiary Added Successfully");
        this.router.navigateByUrl('/listbeneficiaries');
      },
      error=>{
          this.message=error.error.Message;
          console.log(this.message);
          if(this.message=="Unable to add Beneficiary"){
            alert(this.message);
          }
          else{
            this.hasError = true;
          }
        });
    }

  }
}
