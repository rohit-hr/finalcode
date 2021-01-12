export class AccountStatement{
    transaction_id:number;
    transaction_type:string;
    transaction_date:string;
    amount:number;
    from_Account_balance:number;
    remarks:string;


    constructor(transaction_id:number=0,transaction_type:string="",transaction_date:string="",
    amount:number=0,from_Account_balance:number=0,remarks:string=""){
        this.transaction_id = transaction_id;
        this.transaction_type = transaction_type;
        this.transaction_date = transaction_date;
        this.amount = amount;
        this.from_Account_balance = from_Account_balance;
        this.remarks = remarks;
    }
}