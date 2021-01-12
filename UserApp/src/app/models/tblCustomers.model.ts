export class tblCustomers{
    Reference_id:number;
    First_name:string;
    middle_name:string;
    
    Last_name:string;
    Father_name:string;
    mobile_number:string;
    email_id:string;
    account_type:string;
    aadhar_number:string;
    date_of_birth:string;
    age:number;
    gender:string;  
    Residential_address:string;
    permanent_address:string;
    occupation_Type: string;
    source_of_income:string;
    gross_income:number;
    account_OpenDate:string;
    approved_status: string;
    approved_by: string;
    approved_date:string;


    

    constructor(Reference_id:number=0,First_name:string="",middle_name:string="",
    Last_name:string="",Father_name:string="",mobile_number:string="",email_id:string="",account_type:string="",aadhar_number:string="",
    date_of_birth:string="",age:number=0,gender:string="",Residential_address:string="",permanent_address:string="",occupation_Type="",
    source_of_income:string="", gross_income:number=0,account_OpenDate:string="",
    approved_status: string="",
    approved_by: string="",
    approved_date:string=""){
        this.Reference_id = Reference_id;
        this.First_name = First_name;
        this.middle_name = middle_name;
        this.Last_name = Last_name;
        this.Father_name = Father_name;
        this.mobile_number = mobile_number;
        this.email_id = email_id;
        this.account_type = account_type;
        this.aadhar_number = aadhar_number;
        this.date_of_birth = date_of_birth;
        this.age = age;
        this.gender = gender;       
        this.Residential_address = Residential_address;
        this.permanent_address = permanent_address;
        this.occupation_Type = occupation_Type;
        this.source_of_income=source_of_income;
        this.gross_income = gross_income;
        this.account_OpenDate = account_OpenDate;
        this.approved_status = approved_status;
        this.approved_by = approved_by;
        this.approved_date = approved_date;

    }
}