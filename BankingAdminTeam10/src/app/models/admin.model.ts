export class Admin{
    admin_id :string;
    password:string;
    email_id:string;
    constructor(admin_id:string="",password:string="",email_id:string=""){
        this.admin_id=admin_id;
        this.password=password;
        this.email_id=email_id;
    }
}