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
    uname:new FormControl("",Validators.required),
    email:new FormControl("",Validators.required)
  })
  
  constructor(private service:BackendServiceService)
  {

  }
  ngOnInit(): void {
    this.gettingTheAllTheData()

  }
  gettingTheAllTheData()
  {
    this.service.gettingData().subscribe((data)=>{
      this.login=data
    this.negForm.get('uname')!=this.login.uname
  this.negForm.get('email')!=this.login.email
    }
    )
   
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
