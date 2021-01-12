import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-transfersuccessful',
  templateUrl: './transfersuccessful.component.html',
  styleUrls: ['./transfersuccessful.component.css']
})
export class TransfersuccessfulComponent implements OnInit {
  from_account:number=0;
  transaction:any;
  constructor(private activatedRoute:ActivatedRoute,private transactionService:TransactionService, private router:Router) {
    this.activatedRoute.params.subscribe(params=>this.from_account=params["id"]);
    console.log(this.from_account);
    this.transactionService.getTransaction(this.from_account).subscribe(t=>
      {
        console.log(t);
        this.transaction=t;
        console.log(this.transaction);
      });
  }
  
  ngOnInit(): void {
    
  }
  onClose(){
    this.router.navigateByUrl('/fundstransfer');
  }
}
