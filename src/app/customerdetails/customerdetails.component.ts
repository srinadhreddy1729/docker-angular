import { Component, OnDestroy, OnInit } from '@angular/core';
import { BackendServiceService } from '../backend-service.service';
import { LoginPage } from '../login-page';
import { SharedserviceService } from '../sharedservice.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrl: './customerdetails.component.css'
})
export class CustomerdetailsComponent implements OnInit{
  userData: any={};
constructor(private service: BackendServiceService  ) {}
  ngOnInit() {
    
    const userDetails:any = localStorage.getItem("userdata")
    this.userData = JSON.parse(userDetails)
    
  }
  signOut() {

  localStorage.removeItem("userdata");
    
  this.ngOnInit()
}

}













