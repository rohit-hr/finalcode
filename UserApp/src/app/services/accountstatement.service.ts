  
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MiniStatement } from '../models/ministatement.model';


@Injectable()
export class AccountStatementService{

    constructor(private getHttp:HttpClient){
        
    }
    public getAccountStatementFromApi(id:any,start_date:any,end_date:any){
        return this.getHttp.get("http://localhost:63882/api/AccountStatement/?id="+id+"&start_date="+start_date+"&end_date="+end_date);
    }

    public getAccountNumberFromApi(id:any){
        return this.getHttp.get("http://localhost:63882/api/GetAccountNumber/"+id);
    }
}