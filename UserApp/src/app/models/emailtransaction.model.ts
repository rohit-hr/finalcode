export class Emailtransaction{
    email_Id:string;
    subject:string;
    body:string;
    constructor(email_Id:string="",subject:string="",body:string=""){
        this.email_Id=email_Id;
        this.subject=subject;
        this.body=body;
    }
}