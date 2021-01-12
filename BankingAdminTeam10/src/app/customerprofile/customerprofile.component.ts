import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSequence } from 'protractor';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.css']
})
export class CustomerprofileComponent implements OnInit {
  id:any;
  Customerprofile:any;
  constructor(private adminservice:AdminService,private activateroute:ActivatedRoute) { 
    this.id=this.activateroute.snapshot.params["Reference_id"];
    this.adminservice.GetCustomerProfile(this.id).subscribe(data=>this.Customerprofile=data);

  }

  ngOnInit(): void {
  }

}
