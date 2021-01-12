import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/bankingreg.model';
import {User} from '../models/user.model';

@Injectable()
export class UserService
{
    constructor(private postHttp:HttpClient)
    {
       
    }
    public LoginCheckUsingApi(user:User)
    {
        return this.postHttp.post("http://localhost:63882/api/login",user);
    }

    // public  PosttblNetBanking(user:User)
    // {
    //     return this.postHttp.post("http://localhost:57540/api/register",user);
    // }

    public InternetBankingRegistration(user:User)
    {
        return this.postHttp.post("http://localhost:63882/api/IBRegistration",user);
    }

    public addCustomer(customer:Customer)
    {
        return this.postHttp.post("http://localhost:63882/api/CustomerRegistration",customer);
    }

    public sendEmail(customer:Customer)
    {
        return this.postHttp.post("http://localhost:63882/custreg/sendemail/",customer);
    }
}