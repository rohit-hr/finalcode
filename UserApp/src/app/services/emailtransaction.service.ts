import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Emailtransaction } from '../models/emailtransaction.model';

@Injectable()
export class EmailtransactionService{
    constructor(private httpClient:HttpClient){}
    public sendTransactionEmail(emailtransaction:Emailtransaction){
        return this.httpClient.post("http://localhost:63882/sendEmail",emailtransaction);
    }
}