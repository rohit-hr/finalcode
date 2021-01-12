import { Component, OnInit } from '@angular/core';
import {AccountSummaryService} from '../../services/accountsummary.service'

@Component({
  selector: 'app-accountsummary',
  templateUrl: './accountsummary.component.html',
  styleUrls: ['./accountsummary.component.css']
})
export class AccountsummaryComponent implements OnInit {
  id:any;
  accountsummary:any;
  recent_transactions:any;
  recent_transactionstoggle:boolean=false;
  account_number:any;
  
  constructor(private accountSummaryService:AccountSummaryService) {
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

   ShowRecentTransactions()
     {
      this.accountSummaryService.getRecentTransactionsFromApi(this.account_number).subscribe(
        user=>{this.recent_transactions=user,
          console.log(this.recent_transactions);}
      )
        if(this.recent_transactionstoggle==true)
        {
          this.recent_transactionstoggle = false;
        }
          
        else  
          this.recent_transactionstoggle=true
     }

  ngOnInit(): void {
  }

}