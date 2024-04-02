import { Component } from '@angular/core';
import { BackendServiceService } from '../backend-service.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.css'
})
export class PaymentDetailsComponent {
  
//   paymentdetails:any={
//     "FirstName":'',
//     "LastName":'',
//     "OrganizationName":'',
//     "Telephone":'',
//     "Fax":'',
//     "StreetAddress":'', 
//     "VATNumber":'',
//     "City":'',
//     "State":'',
//     "Zip" :'',
//     "Country":'',
//     "dateOfRegistration":'',
//     "nameOfTheStar":'',
//     "personalMessage":''
  
//     }
//     constructor(private service:BackendServiceService,private tostr:ToastrService)
//     {
  
//     }

//     formdetails=new FormGroup(
//       {
//         FirstName:new FormControl('',Validators.required),
//         LastName:new FormControl('',Validators.required),
//         OrganizationName:new FormControl('',Validators.required),
//         Telephone:new FormControl('',Validators.required),
//         Fax:new FormControl('',Validators.required),
//         StreetAddress:new FormControl('',Validators.required),
//         VATNumber:new FormControl('',Validators.required),
//         City:new FormControl('',Validators.required),
//         State:new FormControl('',Validators.required),
//         Zip :new FormControl('',Validators.required),
//         Country:new FormControl('',Validators.required),
        
//       })
//     addUserAdress():void
//     {
//       var data:any=localStorage.getItem("userRegistrationData")
//       var userDetails=JSON.parse(data);
//       this.paymentdetails.dateOfRegistration=userDetails.date;
//       this.paymentdetails.nameOfTheStar=userDetails.name;
//       this.paymentdetails.personalMessage=userDetails.message;
//       this.paymentdetails.FirstName=this.formdetails.get("FirstName")!.value
//       this.paymentdetails.LastName=this.formdetails.get("LastName")!.value
//       this.paymentdetails.OrganizationName=this.formdetails.get("OrganizationName")!.value
//       this.paymentdetails.Telephone=this.formdetails.get("Telephone")!.value
//       this.paymentdetails.Fax=this.formdetails.get("Fax")!.value
//       this.paymentdetails.StreetAddress=this.formdetails.get("StreetAddress")!.value
//       this.paymentdetails.VATNumber=this.formdetails.get("VATNumber")!.value
//       this.paymentdetails.City=this.formdetails.get("City")!.value
//       this.paymentdetails.State=this.formdetails.get("State")!.value
//       this.paymentdetails.Zip=this.formdetails.get("Zip")!.value
//       this.paymentdetails.Country=this.formdetails.get("Country")!.value

// console.log(this.paymentdetails)
//       this.service.paymentDetails(this.paymentdetails).
//       subscribe((payment:any)=>{
//         if(payment.message==="successfully saved")
//         {

//           console.log("successfully done.........")
//           this.tostr.success("successfully done................");

//         }
//         else if(payment.message==="successfully not saved")
//         {
//           this.tostr.error("details already existed")
//         }
//       },
//       err=>{})
//     }
paymentdetails:any={
  "FirstName":'',
  "LastName":'',
  "OrganizationName":'',
  "Telephone":'',
  "Fax":'',
  "StreetAddress":'', 
  "VATNumber":'',
  "City":'',
  "State":'',
  "Zip" :'',
  "Country":''
}

formdetails = new FormGroup({
  FirstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
  LastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
  OrganizationName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
  Telephone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]), 
  Fax: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
  StreetAddress: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]),
  VATNumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]), 
  City: new FormControl('', [Validators.required]),
  State: new FormControl('', [Validators.required]),
  Zip: new FormControl('', [Validators.required, Validators.pattern(/^\d{6}$/)]), 
  Country: new FormControl('', [Validators.required]),
  
});

constructor(private service:BackendServiceService, private tostr:ToastrService) {}

addUserAdress() {
  var data:any=localStorage.getItem("userRegistrationData")
   var userDetails=JSON.parse(data);
  this.paymentdetails.dateOfRegistration=userDetails.date;
  this.paymentdetails.nameOfTheStar=userDetails.name;
  this.paymentdetails.personalMessage=userDetails.message;
  this.paymentdetails.FirstName = this.formdetails.get("FirstName")!.value;
  this.paymentdetails.LastName = this.formdetails.get("LastName")!.value;
  this.paymentdetails.OrganizationName = this.formdetails.get("OrganizationName")!.value;
  this.paymentdetails.Telephone = this.formdetails.get("Telephone")!.value;
  this.paymentdetails.Fax = this.formdetails.get("Fax")!.value;
  this.paymentdetails.StreetAddress = this.formdetails.get("StreetAddress")!.value;
  this.paymentdetails.VATNumber = this.formdetails.get("VATNumber")!.value;
  this.paymentdetails.City = this.formdetails.get("City")!.value;
  this.paymentdetails.State = this.formdetails.get("State")!.value;
  this.paymentdetails.Zip = this.formdetails.get("Zip")!.value;
  this.paymentdetails.Country = this.formdetails.get("Country")!.value;

console.log(this.paymentdetails)
      this.service.paymentDetails(this.paymentdetails).
      subscribe((payment:any)=>{
        if(payment.message==="successfully saved")
        {

          console.log("successfully done.........")
          this.tostr.success("successfully done................");

        }
        else if(payment.message==="successfully not saved")
        {
          this.tostr.error("details already existed")
        }
      },
      err=>{})
    }








}
