import { Component } from '@angular/core';
import { BackendServiceService } from '../backend-service.service';
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-star-map-entry',
  templateUrl: './star-map-entry.component.html',
  styleUrl: './star-map-entry.component.css'
})
export class StarMapEntryComponent {
   id:any='';
  constructor(private service:BackendServiceService,private toaster:ToastrService,private router:Router)
  {

  }
  submitForStarMap():void
  {
this.service.gettingUserDataById(this.id).subscribe((data:any)=>{
  if(data.message==="valid id")
  {
this.toaster.success("user credential correct...please wait some time")
this.router.navigate(['/StarMap'])
console.log("done")
  }
  else if(data.message==='not valid')
  {
    this.toaster.error("enter correct credential")


  }
},
err=>{});
  }

}
