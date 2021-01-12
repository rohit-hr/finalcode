export class UserProfile{
    Reference_id:number;
    First_name:string;
    Last_name:string;
    mobile_number:string;
    email_id:string;
    gender:string;
    aadhar_number:string;
    date_of_birth:string;
    Residential_address:string;
    permanent_address:string;
    occupation_Type: string;

    constructor(Reference_id:number=0,First_name:string="",
    Last_name:string="",mobile_number:string="",email_id:string="",gender:string="",aadhar_number:string="",
    date_of_birth:string="",Residential_address:string="",permanent_address:string="",occupation_Type=""){
        this.Reference_id = Reference_id;
        this.First_name = First_name;
        this.Last_name = Last_name;
        this.mobile_number = mobile_number;
        this.email_id = email_id;
        this.gender = gender;
        this.aadhar_number = aadhar_number;
        this.date_of_birth = date_of_birth;
        this.Residential_address = Residential_address;
        this.permanent_address = permanent_address;
        this.occupation_Type = occupation_Type;

    }
}