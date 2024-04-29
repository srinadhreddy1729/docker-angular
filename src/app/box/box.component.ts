
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BackendServiceService } from '../backend-service.service';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
  signInForm: FormGroup=new FormGroup({}) ;
  signUpForm: FormGroup=new FormGroup({});
  loginMode: 'signin' | 'signup' = 'signin';

  constructor(
    private fb: FormBuilder,
    private service: BackendServiceService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const container = this.document.getElementById('container');
      const registerBtn = this.document.getElementById('register');
      const loginBtn = this.document.getElementById('login');

      registerBtn?.addEventListener('click', () => {
        container?.classList.add("active");
      });

      loginBtn?.addEventListener('click', () => {
        container?.classList.remove("active");
      });
    }
    this.initForms();
  }

  initForms(): void {
    // Initialize sign-in form
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    // Initialize sign-up form
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  toggleLoginMode(mode: 'signin' | 'signup'): void {
    this.loginMode = mode;
    if (mode === 'signin') {
      this.signInForm.reset();
    } else {
      this.signUpForm.reset();
    }
  }

  userSignIn(): void {
    const form = this.loginMode === 'signin' ? this.signInForm : this.signUpForm;
    if (form.valid) {
      const formData = form.value;
      this.service.getting(formData).subscribe(
        (data: any) => {
          if (data.message === 'login sucessfully') {
            localStorage.setItem("userdata", JSON.stringify(data.userdata));
            localStorage.setItem("Token", data.AuthToken);
            this.router.navigate(['/mydetails']);
          } else if (data.message === "login unsucessfully") {
            this.toastr.error("Invalid credentials");
          } else if (data.message === "Invalid request body") {
            this.toastr.error("Please enter the data");
          }
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.validateAllFormFields(form);
    }
  }

  userSignUp(): void {
    const form = this.loginMode === 'signin' ? this.signInForm : this.signUpForm;
    if (form.valid) {
      const formData = form.value;
      this.service.Fetting(formData).subscribe(
        (data: any) => {
          if (data.message === 'working sucessfully') {
            this.toastr.success("Successfully completed sign up. Please sign in.");
          } else if (data.message === "working not sucessfully") {
            this.toastr.error("User details already exist");
          } else if (data.message === "Invalid request body") {
            this.toastr.error("Please enter the data");
          }
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.validateAllFormFields(form);
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
}




































