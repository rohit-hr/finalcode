import { Component, OnInit } from '@angular/core';
import {​​​​​ TrackApplicationService }​​​​​ from "../services/trackapplication.service";

@Component({
  selector: 'app-trackapplication',
  templateUrl: './trackapplication.component.html',
  styleUrls: ['./trackapplication.component.css']
})
export class TrackapplicationComponent implements OnInit {
  Reference_id:any;
  trackapplication:any;
  trackapplicationtoggle:boolean=false;
  constructor(private trackApplicationService:TrackApplicationService) {
    // this.trackApplicationService.trackApplicationFromApi(this.Reference_id).subscribe(
    //   user=>{this.trackapplication=user,
    //     console.log(this.Reference_id),
    //     console.log(this.trackapplication);}
    // )
    
   }

  //  ShowTrackApplication()
  //  {
  //     if(this.trackapplicationtoggle==true)
  //     {
  //       this.trackapplicationtoggle = false;
  //     }
        
  //     else  
  //       this.trackapplicationtoggle=true
  //  }

   TrackApplicationDetails()
   {
    this.trackApplicationService.trackApplicationFromApi(this.Reference_id).subscribe(
      user=>{this.trackapplication=user,
        console.log(this.Reference_id),
        console.log(this.trackapplication);}
    )
   }

  ngOnInit(): void {
  }

}
