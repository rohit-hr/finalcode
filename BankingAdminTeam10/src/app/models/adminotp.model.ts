import { SrvRecord } from "dns";

export class AdminOtp{
    email_id:string;
    otp:number;
    constructor(email_id:string="",otp:number=0){
        this.email_id=email_id;
        this.otp=otp;
    }
}