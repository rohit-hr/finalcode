export class Password{
    user_id:number;
    password:string;
    transaction_password:string;

    constructor(id:number=0,pwd:string="",t_pwd:string="")
    {
        this.user_id=id;
        this.password=pwd;
        this.transaction_password=t_pwd;
    }
}