import { Component, OnInit } from '@angular/core';
import { Admin } from '../models/admin.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-approvedapplications',
  templateUrl: './approvedapplications.component.html',
  styleUrls: ['./approvedapplications.component.css']
})
export class ApprovedapplicationsComponent implements OnInit {
  approvedApplications:any;
  constructor(private adminservice:AdminService) 
  { 
    this.adminservice.GetApprovedApplications().subscribe(data=>this.approvedApplications=data);
  }

  ngOnInit(): void {
  }

}
