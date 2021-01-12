
export class MiniStatement{
    customer_id:number;
    start_date:string;
    end_date:string;


    constructor(customer_id:number=0,start_date:string="",end_date:string=""){
        this.customer_id = customer_id;
        this.start_date = start_date;
        this.end_date = end_date;
    }
}