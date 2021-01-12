import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-rejectedapplications',
  templateUrl: './rejectedapplications.component.html',
  styleUrls: ['./rejectedapplications.component.css']
})
export class RejectedapplicationsComponent implements OnInit {
  rejectedapplications:any;
  constructor(private adminservice:AdminService) { 
   this.adminservice.GetRejectedApplications().subscribe(data=>this.rejectedapplications=data);
  }

  ngOnInit(): void {
  }

}
