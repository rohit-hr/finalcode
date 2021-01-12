export class Beneficiary{
    beneficiary_id:number;
    customer_id:number;
    account_number:number;
    beneficiary_account_number:number;
    nickname:string;
    constructor(beneficiary_id:number=0,customer_id:number=0,account_number:number=0,beneficiary_account_number:number=0,nickname:string=""){
        this.beneficiary_id=beneficiary_id;
    this.customer_id=customer_id;
    this.account_number=account_number;
    this.beneficiary_account_number=beneficiary_account_number;
    this.nickname=nickname;
    }
}