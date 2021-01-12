import { Component, OnInit } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private route:Router) {
    localStorage.getItem("admin");
   }
  logout(){
    localStorage.clear();
    this.route.navigate(["home"]);
  }

  ngOnInit(): void {
  }

}
