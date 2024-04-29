import { Component, OnDestroy, OnInit } from '@angular/core';
import { BackendServiceService } from '../backend-service.service';
import { LoginPage } from '../login-page';
import { SharedserviceService } from '../sharedservice.service';
import { Subscription } from 'rxjs';
import { Inject,PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrl: './customerdetails.component.css'
})
export class CustomerdetailsComponent implements OnInit{
  userData: any={};
constructor( @Inject(PLATFORM_ID) private platformId: Object,private service: BackendServiceService  ){}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {

    const userDetails:any = localStorage.getItem("userdata")
    this.userData = JSON.parse(userDetails)
    }
    
  }
  signOut() {
    if (isPlatformBrowser(this.platformId)) {

  localStorage.removeItem("userdata");
  localStorage.removeItem('Token')
    }
  this.ngOnInit()
}

}













