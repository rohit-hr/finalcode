  
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tblCustomers } from '../models/tblCustomers.model';



@Injectable()
export class UserProfileService{

    constructor(private getHttp:HttpClient,private putHttp:HttpClient){
        
    }
    public getUserProfileFromApi(id:any){
        return this.getHttp.get("http://localhost:63882/api/UserProfile/"+id);
    }

    public EditResidentialAddress(Reference_id:any,tblcustomer:tblCustomers){
        return this.putHttp.put("http://localhost:63882/EditDetails/EditResidentialAddress/?refid="+Reference_id,tblcustomer);
    }

    public EditPermanentAddress(Reference_id:any,tblcustomer:tblCustomers){
        return this.putHttp.put("http://localhost:63882/EditDetails/EditPermanentAddress/?refid="+Reference_id,tblcustomer);
    }

    public EditOccupationType(Reference_id:any,tblcustomer:tblCustomers){
        return this.putHttp.put("http://localhost:63882/EditDetails/EditOccupationType/?refid="+Reference_id,tblcustomer);
    }

    public getReferenceIdFromApi(id:any){
        return this.getHttp.get("http://localhost:63882/api/GetReferenceId/"+id);
    }

}