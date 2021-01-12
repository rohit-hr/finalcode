import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Password} from '../models/password.model';

@Injectable()
export class PasswordService
{
    constructor(private putHttp:HttpClient, private postHttp:HttpClient)
    {
       
    }

    public ChangeLoginPasswordfromApi(id:number,new_pwd:Password)
    {
        return this.putHttp.put("http://localhost:63882/api/ChangeLoginPassword/"+id,new_pwd);
    }

    public CheckOldPassword(id:number,password:Password)
    {
        return this.postHttp.post("http://localhost:63882/api/ChangeLoginPassword/"+id,password);
    }

    public ChangeTransactionPasswordfromApi(id:number,new_pwd:Password)
    {
        return this.putHttp.put("http://localhost:63882/api/ChangeTransactionPassword/"+id,new_pwd);
    }

    public CheckOldTransactionPassword(id:number,password:Password)
    {
        return this.postHttp.post("http://localhost:63882/api/ChangeTransactionPassword/"+id,password);
    }
}
