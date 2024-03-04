import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendServiceService } from '../backend-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone:true,
  imports:[FormsModule],
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrl: './mail.component.css'
})
export class MailComponent {
    emailData = {
      to: '',
      subject: '',
      text: ''
    };
  
    constructor(private http:BackendServiceService) {}
  
     sendEmail() {
    //   this.http.mail(this.emailData).subscribe((response:any) => {
    //     console.log('Response from server:', response.mail);
    //   },err=>{}
    //   );
    }

}
