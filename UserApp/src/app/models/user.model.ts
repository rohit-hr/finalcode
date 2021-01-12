export class User
{
    user_id:string;
    account_number:string;
    password:string;
    transaction_password:string;

    constructor(user_id:string="",account_number:string="",password:string="",transaction_password:string="")
    {
        this.user_id=user_id;
        this.account_number=account_number;
        this.password=password;
        this.transaction_password=transaction_password;
    }
}