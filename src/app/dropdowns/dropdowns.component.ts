import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as frameRates from '../../assets/Information.json'
import { OnInit } from '@angular/core';
import * as jwt from'jsonwebtoken';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-dropdowns',
  standalone: true,
  imports: [CommonModule,RouterModule,FooterComponent],
  templateUrl: './dropdowns.component.html',
  styleUrl: './dropdowns.component.css'
})
export class DropdownsComponent implements OnInit {
desireDate:any;
  ngOnInit(): void {
    this.desireDate=this.getNextDate(new Date());
    
  }
  nameOption1:any=[{key:'Free Gift',},{key:'Free Gift-Zodiac Pendant'},
                      {key:'Lifetime registry record'},{key:'Visible from your location'},
                      {key:'Gift Folder'},{key:'Electric files included '},
                      {key:'Constellation of your choice'}  ,{key:'get visualization'}                                       ]
 nameOption2:any=[{key:'Free Gift',},{key:'Free Gift-Second Gift pack'},
                      {key:'Lifetime registry record'},{key:'Visible from your location'},
                      {key:'Gift Folder'},{key:'Electric files included '},
                      {key:'Extra bright,easy navigation'},{key:'Suitable for  names'}                    ]
nameOption3:any=[{key:'Free Gift-Star Map',},
                    {key:'Lifetime registry record'},{key:'Visible from your location'},
                    {key:'Registration certificate'},{key:'Gift Folder'},
                    {key:'Electric files included and better'},{key:'get a pdf with certificate'},{key:'get visualization'} ]


                    Frame1():void{
                      

                      localStorage.setItem("ueutrywtrytewy$^%%#$@$@$@","*(%^&#%$$@#@$)&%*^$%^$!@#$^%&^HJGHFHGBJVHGCD%^$&&)*(&*&)4gshfcgs")

                    }
                    Frame2():void{
                      

                      localStorage.setItem("ueutrywtrytewy$^%%#$@$@$@","idwhedg275463564172%%^$$!@#$%^^%#$$@##@#@fggfg#$%#$%#%%fgg@#$!#@#@#$")
                    }
                Frame3():void
               {
              localStorage.setItem("ueutrywtrytewy$^%%#$@$@$@","56476846ghjfhjdgfjewhaskjf9-309$^%#$#%$^&fgjhfg#%$%8675@@%%$$&^%HGHFHH4649?&*797GJKHJKHJ")
             }      





             getNextDate(currentDate:any) {
              var day = currentDate.getDate();
              var month = currentDate.getMonth();
              var nextDay = day + 3;
              var nextMonth = month;
              var daysInMonth = new Date(currentDate.getFullYear(), month + 1, 0).getDate();
              if (nextDay > daysInMonth) {
                nextDay -= daysInMonth;
                nextMonth++;
              }
              var monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
              ];
              var nextMonthName = monthNames[nextMonth];
              
              return nextMonthName.toUpperCase()+ " " + nextDay;
            }
            
           
            
            

}
