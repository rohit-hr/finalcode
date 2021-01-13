import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/services/userprofile.service';
import { tblCustomers } from 'src/app/models/tblCustomers.model';
import { UserProfile } from 'src/app/models/userprofile.model';
import { Router } from '@angular/router';
// import { UserProfile } from '../models/userprofile.model';
// import { UserProfileService } from '../services/userprofile.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
    id:any;
    userprofile:any;
    Reference_id:number=2;
    tblcustomer:tblCustomers;
    updateprofile:any;
    formGroup:boolean=false;
    refid:any;
    profile:UserProfile;
    
   constructor(private userProfileService: UserProfileService, private route:Router) {
        this.tblcustomer = new tblCustomers();
        this.profile = new UserProfile();
        this.id=localStorage.getItem("userid");
        this.userProfileService.getUserProfileFromApi(this.id).subscribe(
          user=>{this.userprofile=user,
            console.log(this.userprofile);}
            )  
             this.userProfileService.getReferenceIdFromApi(this.id).subscribe(
               user=>{this.refid=user,
                 console.log(this.refid);}
                 ) 
        
        this.Reference_id = this.refid;
      // this.refid = this.userprofile.Reference_id;
      // console.log(this.refid);
     }  

     ShowFormGroup()
     {
        //this.refid = userprofile.refid; 
        
        if(this.formGroup==true)
          this.formGroup = false;
        else  
          this.formGroup=true
     }

     EditResidentialAddressDetails()
     {
      //   this.tblcustomer.email_id = this.userprofile[6];
       
       this.userProfileService.EditResidentialAddress(this.refid,this.tblcustomer).subscribe(
        user=>{console.log("Called");window.location.reload();} )
        
     }

     EditPermanentAddressDetails()
     {
      //   this.tblcustomer.email_id = this.userprofile[6];
       
       this.userProfileService.EditPermanentAddress(this.refid,this.tblcustomer).subscribe(
        user=>{console.log("Called");window.location.reload();} )
        
     }

     EditOccupationTypeDetails()
     {
      //   this.tblcustomer.email_id = this.userprofile[6];
       
       this.userProfileService.EditOccupationType(this.refid,this.tblcustomer).subscribe(
        user=>{console.log("Called");window.location.reload();} )
        
     }

  ngOnInit(): void {
  }

}