import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Beneficiary } from '../models/beneficiary.model';

@Injectable()
export class BeneficiaryService{
    constructor(private httpClient:HttpClient){}
    public getBeneficiaries(accountNo:any){
        return this.httpClient.get("http://localhost:63882/api/Beneficiaries?id="+accountNo);
    }
    public addBeneficiary(beneficiary:Beneficiary){
        return this.httpClient.post("http://localhost:63882/api/Beneficiaries",beneficiary);
    }
    public deleteBeneficiary(id:number,accountNo:string|null){
        return this.httpClient.delete("http://localhost:63882/api/Beneficiaries/"+id+"?account_no="+accountNo);
    }
}
