import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../backend-service.service';
import { LoginPage } from '../login-page';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrl: './edit-details.component.css'
})
export class EditDetailsComponent  {
  login:any=new LoginPage();
  
  negForm=new FormGroup({
    uname:new FormControl("name",Validators.required),
    email:new FormControl("email",Validators.required)
  })
  
  constructor(private service:BackendServiceService)
  {

  }
  ngOnInit(): void {
    this.gettingTheAllTheData();
  }
  gettingTheAllTheData()
  {
    this.service.gettingData().subscribe((data)=>this.login=data)
  }
  changeDetails()
  {
    this.service.updateTheValues(this.login).subscribe((data:any)=>{
      if(data.message==="done")
      {
        console.log("done")
      }
      else if(data.message==="error"){
        console.log(" i got error")

      }
      
    })
  }

}
