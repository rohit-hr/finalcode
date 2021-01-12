import { Component, OnInit } from '@angular/core';
import { AccountStatementService } from 'src/app/services/accountstatement.service';
import { AccountSummaryService } from 'src/app/services/accountsummary.service';

@Component({
  selector: 'app-accountstatement',
  templateUrl: './accountstatement.component.html',
  styleUrls: ['./accountstatement.component.css']
})
export class AccountstatementComponent implements OnInit {
  id:any;  
  start_date:string = '2021-01-10';
    end_date:string ='2021-01-25';
    seeStatement_toggle:boolean=false;
   account_number:any;
  accountstatement:any;
  accountsummary:any;
 
  constructor(private accountStatementService:AccountStatementService,private accountSummaryService:AccountSummaryService) {
    
    // this.accountStatementService.getAccountStatementFromApi(this.id,this.start_date,this.end_date).subscribe(
    //   user=>{this.accountstatement=user,
    //     console.log(this.accountstatement);}
    this.id=localStorage.getItem("userid");
    this.accountSummaryService.getAccountSummaryFromApi(this.id).subscribe(
      user=>{this.accountsummary=user,
        console.log(this.accountsummary);}
    )
      
    this.accountSummaryService.getAccountNumberFromApi(this.id).subscribe(
      user=>{this.account_number=user,
        console.log(this.account_number);}
    )
   }

   SeeStatement()
   {

    this.accountStatementService.getAccountStatementFromApi(this.account_number,this.start_date,this.end_date).subscribe(
      user=>{this.accountstatement=user,
        console.log(this.accountstatement);})
      
   }

  ngOnInit(): void {
  }

}
