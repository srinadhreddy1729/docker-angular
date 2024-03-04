import { Component, NgModule } from '@angular/core';
import { BackendServiceService } from '../backend-service.service';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
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

}
