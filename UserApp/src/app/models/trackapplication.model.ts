export class TrackApplication{​​​​​

    Reference_id:number;

    account_type:string;

    approved_status:string;

    approved_date:string;

    email_id:string;

    

    

    constructor(Reference_id:number=0,account_type:string="",approved_status:string="",

    approved_date:string="",email_id:string=""){​​​​​

        this.Reference_id = Reference_id;

        this.account_type = account_type;

        this.approved_status = approved_status;

        this.approved_date = approved_date;

        this.email_id = email_id;       


    }​​​​​

}​​​​​