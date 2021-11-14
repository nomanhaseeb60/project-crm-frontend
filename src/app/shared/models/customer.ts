export interface Customer {
  id:number;
  name: string;
  surname:string;
  companyName?:string; //optional
  telephone:string; //optional
  email:string; //optional
  address:string;
  city?:string;
  country?:string;
}
