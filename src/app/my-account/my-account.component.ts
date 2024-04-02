import { BackendServiceService } from '../backend-service.service';
import { CommonModule } from '@angular/common';
import { LoginPage } from '../login-page';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IsNull } from 'typeorm';


@Component({
  selector: 'app-my-account',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.css'
})
export class MyAccountComponent implements OnInit {
login:any={};
localStorageKey:any;
constructor(private service:BackendServiceService,
  private router:Router,@Inject(DOCUMENT) private document: Document,
  @Inject(PLATFORM_ID) private platformId: Object,private toastr:ToastrService,private fb: FormBuilder)
{

}


  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) 
    {
    const  container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    
    registerBtn?.addEventListener('click', () => {
    container?.classList.add("active");
    });
    
    loginBtn?.addEventListener('click', () => {
    container?.classList.remove("active");
    });
  }
}
userSignIn(){
  
  this.service.getting(this.login).subscribe((data:any)=>{
      if(data.message==='login sucessfully'){
        localStorage.setItem("userdata", JSON.stringify(data.userdata));
        this.router.navigate(['/mydetails']);
      }
      else if(data.message==="login unsucessfully")
      {
        this.toastr.error("invalid credentials");
      }
      else if (data.message==="Invalid request body")
      {
        this.toastr.error("Please enter the data");
      }
     
    },err=>{}
  );
}
  




userSignUp(){
  
  this.service.Fetting(this.login).subscribe(
    (data:any)=>{
      if(data.message==='working sucessfully')
      {
this.toastr.success("sucessfully completed sing up please do sing in")
        console.log(data.message)
      }
      else if(data.message==="working not sucessfully")
      {
        this.toastr.error("user details already existed")
      }
      else if(data.message==="Invalid request body")
      {
        this.toastr.error("Please enter the data")
      }
    },err=>{}
  );

}


}






