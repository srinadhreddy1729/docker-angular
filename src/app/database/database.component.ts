import { Component, NgModule, OnInit } from '@angular/core';
import { LoginPage } from '../login-page';
import { BackendServiceService } from '../backend-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone:true,
  imports:[FormsModule],
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrl: './database.component.css'
})
export class DatabaseComponent implements OnInit{
  login:any=new LoginPage();   

constructor(private service:BackendServiceService,private router:Router)
{

}
  ngOnInit(): void {
    this.getThe();
  }
  getThe():void
{
  this.service.getting(this.login).subscribe(
    (data:any)=>{
      if(data.message==='login sucessfully')
      {
        console.log(data.message)
      this.router.navigate(['/galaxy']);
      }
      else
      {
        console.log(data.message)
        console.error("invalid credentials..........")
      }
    },err=>{}
  );

}

}
