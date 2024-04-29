import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-starregistartion',
  templateUrl: './starregistartion.component.html',
  styleUrl: './starregistartion.component.css'
})
export class StarregistartionComponent {




constructor( @Inject(PLATFORM_ID) private platformId: Object){}
  setItems:any;
 imageData: { src: string,text:string}[] = [
   { src: "./assets/Task@star-registration.in/certificate-1.png" ,text:''},
   { src: "./assets/Task@star-registration.in/certificate-2.png",text:''},
   { src: "./assets/Task@star-registration.in/certificate-3.png" ,text:''},
   { src: "./assets/Task@star-registration.in/certificate-4.png",text:''},
   { src: "./assets/Task@star-registration.in/certificate-5.png" ,text:''},
   { src: "./assets/Task@star-registration.in/certificate-6.png" ,text:''}
 ];
 selectedImage: { src: string, text: string } | null =  {src: "./assets/Task@star-registration.in/certificate-3.png",text:''}
 clickedImageSrc: string | null = null;
 customText: string = ''; 
imagepath:any=this.selectedImage?.src;
 showImage(imageData: { src: string, text: string }) {
   this.selectedImage = imageData;
   this.clickedImageSrc = imageData.src;
   this.imagepath=imageData.src;
   console.log(this.imagepath)
 }

 hideImage() {
   this.selectedImage = null;
   this.clickedImageSrc = null; 
 }



formneg = new FormGroup({
 uname: new FormControl("", [
   Validators.required,
   Validators.pattern(/^[A-Za-z\s]+$/),
   Validators.minLength(3), 
   Validators.maxLength(30), 
 ]),
 uemail: new FormControl("", [
  Validators.required,
  Validators.email,
]),
 umessage: new FormControl("", [
   Validators.required,
   Validators.minLength(5), 
   Validators.maxLength(200), 
 ]),
 udate: new FormControl('', [
   Validators.required,
 ])})


 userRegistrationValues():void
 {
   if (isPlatformBrowser(this.platformId)) {

   var formValues:{name:any,message:any,date:any,useremail:any,imagesrc:any}={
     name:this.formneg.get('uname')!.value,
     message:this.formneg.get('umessage')!.value,
     date:this.formneg.get('udate')!.value,
     useremail:this.formneg.get('uemail')!.value,
     imagesrc:this.imagepath
                }
                
      localStorage.setItem('userRegistrationData',JSON.stringify(formValues))

   }
  }
}




