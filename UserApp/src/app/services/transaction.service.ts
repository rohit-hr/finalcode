import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Transaction } from 'src/app/models/transaction.model';

@Injectable()
export class TransactionService{
    constructor(private httpClient:HttpClient,private getHttp:HttpClient,private getbeneficiary:HttpClient){}
    public getAccountNumber(userId:string|null){
        return this.getHttp.get("http://localhost:63882/getAccountNumber?id="+userId);
    }
    public getBeneficiaries(accountNo:string|null){
        return this.getbeneficiary.get("http://localhost:63882/api/Beneficiaries?id="+accountNo);
    }
    public initiateTransaction(transaction:Transaction){
        return this.httpClient.post("http://localhost:63882/api/Transaction",transaction);
    }
    public getEmailId(userId:string|null){
        return this.getHttp.get("http://localhost:63882/getEmailId?id="+userId);
    }
    public getTransaction(id:number){
        return this.httpClient.get("http://localhost:63882/api/Transaction/"+id);
    }
    public getTransactionPassword(userId:string|null){
        return this.getHttp.get("http://localhost:63882/getTransactionPassword?id="+userId);
    }
}
