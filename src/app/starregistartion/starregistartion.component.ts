import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-starregistartion',
  templateUrl: './starregistartion.component.html',
  styleUrl: './starregistartion.component.css'
})
export class StarregistartionComponent {


   setItems:any;
  imageData: { src: string,text:string}[] = [
    { src: "./assets/Task@star-registration.in/certificate-1.jpg" ,text:''},
    { src: "./assets/Task@star-registration.in/certificate-2.jpg",text:''},
    { src: "./assets/Task@star-registration.in/certificate-3.jpg" ,text:''},
    { src: "./assets/Task@star-registration.in/certificate-4.jpg",text:''},
    { src: "./assets/Task@star-registration.in/certificate-5.jpg" ,text:''},
    { src: "./assets/Task@star-registration.in/certificate-6.jpg" ,text:''}
  ];
  selectedImage: { src: string, text: string } | null = null;
  clickedImageSrc: string | null = null;
  customText: string = ''; 

  showImage(imageData: { src: string, text: string }) {
    this.selectedImage = imageData;
    this.clickedImageSrc = imageData.src; 
  }

  hideImage() {
    this.selectedImage = null;
    this.clickedImageSrc = null; 
  }


formneg:FormGroup=new FormGroup
(
  {
    uname:new FormControl("",[Validators.required,Validators.pattern(/^[A-Za-z\s]+$/)]),
    umessage:new FormControl("",[Validators.required,Validators.pattern(/^[A-Za-z\s]+$/)]),
    udate:new FormControl('',Validators.required)

  }

)



  userRegistrationValues():void
  {
    var formValues:{name:any,message:any,date:any}={
      name:this.formneg.get('uname')!.value,
      message:this.formneg.get('umessage')!.value,
      date:this.formneg.get('udate')!.value
                 }
   
localStorage.setItem('userRegistrationData',JSON.stringify(formValues))


    
      }



}
