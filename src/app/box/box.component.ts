import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendServiceService } from '../backend-service.service';
import { DOCUMENT } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { PLATFORM_ID } from '@angular/core';
import { Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
})
export class BoxComponent {
  loginForm: FormGroup=new FormGroup([]);
  loginMode: 'signin' | 'signup' = 'signin';

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
    this.initLoginForm();
  }

  initLoginForm(): void {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  toggleLoginMode(mode: 'signin' | 'signup'): void {
    this.loginMode = mode;
    this.initLoginForm(); // Reset form when toggling mode
  }

  userSignIn(): void {
    if (this.loginForm.valid) {
      // Perform sign-in logic
      console.log('Sign in form submitted:', this.loginForm.value);
    } else {
      // Handle invalid form
      this.validateAllFormFields(this.loginForm);
    }
  }

  userSignUp(): void {
    if (this.loginForm.valid) {
      // Perform sign-up logic
      console.log('Sign up form submitted:', this.loginForm.value);
    } else {
      // Handle invalid form
      this.validateAllFormFields(this.loginForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else {
        control!.markAsTouched({ onlySelf: true });
      }
    });
  }
  toggleErrorMessages(show: boolean): void {
    const errorMessages = document.querySelector('.error-messages');
    if (errorMessages) {
      if (show) {
        errorMessages.classList.add('show');
      } else {
        errorMessages.classList.remove('show');
      }
    }
}


}



