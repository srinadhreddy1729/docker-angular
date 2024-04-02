import { Component, NgModule } from '@angular/core';
import { BackendServiceService } from '../backend-service.service';
import { FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControlStatus } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  emailData = {
    to: '',
    subject: '',
    text: '',
    name:''
  };

  constructor(private http:BackendServiceService,private router:Router) {}

  sendEmail() {
    this.http.mail(this.emailData).subscribe((response:any) => {
      console.log('Response from server:', response.mail);

if(response.mail="Email sent successfully")
{
  this.router.navigate(['/mess']);
}

    },err=>{}
    );
  }






  // contactForm:FormGroup;

  // constructor(private http: BackendServiceService, private fb: FormBuilder, private router: Router) {
  //   this.contactForm = this.fb.group({
  //     name: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     subject: ['', Validators.required],
  //     comment: ['', Validators.required]
  //   });
  // }

  // sendEmail() {
  //   if (this.contactForm.valid) {
  //     this.http.mail(this.contactForm.value).subscribe((response: any) => {
  //       console.log('Response from server:', response.mail);
  //       if (response.mail === 'Email sent successfully') {
  //         this.router.navigate(['/mess']);
  //       }
  //     }, err => {});
  //   } else {
  //     this.validateAllFormFields(this.contactForm);
  //   }
  // }
  

  // validateAllFormFields(formGroup: FormGroup) {
  //   Object.keys(formGroup.controls).forEach(field => {
  //     const control = formGroup.get(field);
  //     if (control instanceof FormGroup) {
  //       this.validateAllFormFields(control);
  //     } else {
  //       control?.markAsTouched({ onlySelf: true });
  //     }
  //   });
  }








