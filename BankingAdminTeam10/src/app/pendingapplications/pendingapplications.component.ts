import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-pendingapplications',
  templateUrl: './pendingapplications.component.html',
  styleUrls: ['./pendingapplications.component.css']
})
export class PendingapplicationsComponent implements OnInit {
 pendingapplications:any;
  constructor(private adminservice:AdminService) { 
    this.adminservice.GetPendingApplications().subscribe(data=>this.pendingapplications=data);
  }

  ngOnInit(): void {
  }

}
