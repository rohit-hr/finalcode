import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BeneficiaryService } from 'src/app/services/beneficiary.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-listbenificiaries',
  templateUrl: './listbenificiaries.component.html',
  styleUrls: ['./listbenificiaries.component.css']
})
export class ListbenificiariesComponent implements OnInit {
  fromAccount:any;
  userId:string |null;
  accountNo:string|null;
  beneficiaries:any;
  delete=false;
  message:string="";
  constructor(private transactionService:TransactionService,private beneficiaryService:BeneficiaryService,private router:Router) { 
    this.userId=localStorage.getItem("userid");
    console.log(this.userId);
    this.transactionService.getAccountNumber(this.userId).subscribe(a=>{
      console.log(a);
      this.fromAccount=a;
      localStorage.setItem("accountNo",this.fromAccount);
    });
    this.accountNo=localStorage.getItem("accountNo");
    console.log(this.accountNo);
    this.beneficiaryService.getBeneficiaries(this.accountNo).subscribe(b=>
      {
        console.log(b);
        this.beneficiaries=b;
      });
  }

  ngOnInit(): void {
  }
onDelete(beneficiaryAccountNumber:number){
  this.delete=confirm("Are you sure you want to delete?");
  if(this.delete==true){
    this.accountNo=localStorage.getItem("accountNo");
  console.log(this.accountNo)
  this.beneficiaryService.deleteBeneficiary(beneficiaryAccountNumber,this.accountNo).subscribe(d=>{
    console.log(d);
    alert("Beneficiary Deleted");
    this.router.navigateByUrl('/listbeneficiaries');
    window.location.reload();
  },
  error=>{
    this.message=error.error.Message;
    alert(this.message);
  });
  }
  else{
  window.location.reload();
  }
}

}
