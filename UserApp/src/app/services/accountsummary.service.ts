import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountSummaryService{

    constructor(private getHttp:HttpClient){
        
    }
    public getAccountSummaryFromApi(id:any){
        return this.getHttp.get("http://localhost:63882/api/AccountSummary/"+id);
    }

    public getRecentTransactionsFromApi(id:any){
        return this.getHttp.get("http://localhost:63882/api/RecentTransactions/"+id);
    }

    public getAccountNumberFromApi(id:any){
        return this.getHttp.get("http://localhost:63882/api/GetAccountNumber/"+id);
    }
}