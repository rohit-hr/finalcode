import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import {HttpClientModule}from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MDBBootstrapModule, MDBRootModule } from 'angular-bootstrap-md';
import { AdminService } from './services/admin.service';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { AllapplicationsComponent } from './allapplications/allapplications.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { ApprovedapplicationsComponent } from './approvedapplications/approvedapplications.component';
import { PendingapplicationsComponent } from './pendingapplications/pendingapplications.component';
import { RejectedapplicationsComponent } from './rejectedapplications/rejectedapplications.component';
import { AuthGuard } from './auth.guard';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgotusernameComponent } from './forgotusername/forgotusername.component';



var routes:Routes=[
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'adminhome',component:AdminhomeComponent, canActivate: [AuthGuard]},
  {path:'allapplications',component:AllapplicationsComponent,children:[
    {path:'customerprofile/:Reference_id',component:CustomerprofileComponent}]}, 
  {path:'approvedapplications',component:ApprovedapplicationsComponent},
  {path:'pendingapplications',component:PendingapplicationsComponent},
  {path:'rejectedapplications',component:RejectedapplicationsComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'changepassword',component:ChangepasswordComponent},
  {path:'forgotusername',component:ForgotusernameComponent}
 
  
 
]
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminhomeComponent,
    AllapplicationsComponent,
    CustomerprofileComponent,
    ApprovedapplicationsComponent,
    PendingapplicationsComponent,
    RejectedapplicationsComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent,
    ForgotusernameComponent,
   
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot() ,
    RouterModule.forRoot(routes),
   


  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
