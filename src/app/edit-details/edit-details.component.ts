import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../backend-service.service';
import { LoginPage } from '../login-page';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { AbstractControl, ValidatorFn,ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrl: './edit-details.component.css'
})
export class EditDetailsComponent  {
 
 constructor(private toaster:ToastrService,private service:BackendServiceService )
 {

 }
 
  ResetDetails:FormGroup=new FormGroup(
    {
      email:new FormControl('', [Validators.required, Validators.email,this.emailDomainValidator('gmail.com')]),
      newpassword:new FormControl ('', 
        [Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/), this.passwordPatternValidator() // Use custom validator function

      ]

      )

    }

  )

  
  ResetPassword():void
  {
     const name:any=this.ResetDetails.get('email')!.value;
     const newpassword:any=this.ResetDetails.get('newpassword')!.value;
this.service.Resetpassword(name,newpassword).subscribe((data:any)=>
{
if(data.message==="Password reset successfully")
{
this.toaster.success("Password reset successfully")
}
else if(data.message==="User not found")
{
  this.toaster.error("User not found")
 
}
else if(data.error==="Failed to reset password")
  {
    this.toaster.error("Failed to reset password")
  }
else if(data.message==="Password has already been reset to the same value")
{
  this.toaster.error("Password has already been reset to the same value")

}
},err=>{})
  }




   emailDomainValidator(domainName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const email: string = control.value;
      if (email === '' || email.endsWith('@' + domainName)) {
        return null; 
      } else {
        return { 'invalidDomain': true }; 
      }
    };




}

passwordPatternValidator(): any {
  return (control: AbstractControl): ValidationErrors | null => {
    const password: string = control.value;
    if (!/(?=.*[a-z])/.test(password)) {
      return { 'lowercase': true };
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      return { 'uppercase': true };
    }
    if (!/(?=.*\d)/.test(password)) {
      return { 'digit': true };
    }
    if (!/[!@#$%^&*()\-+]/.test(password)) {
      return { 'special': true };
    }
    return null;
  };
}
}