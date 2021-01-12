export class AccountSummary{
    account_number:number;
    balance:number;
    amount:number;
    to_account:number;

    constructor(account_number:number=0,balance:number=0,amount:number=0,
        to_account:number){
        this.account_number = account_number;
        this.balance = balance;
        this.amount = amount;
        this.to_account = to_account;
    }
}