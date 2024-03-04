import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dropdowns',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './dropdowns.component.html',
  styleUrl: './dropdowns.component.css'
})
export class DropdownsComponent {
  nameOption1:any=[{key:'Free Gift',},{key:'Free Gift-Zodiac Pendant'},
                      {key:'Lifetime registry record'},{key:'Visible from your location'},
                      {key:'Gift Folder'},{key:'Electric files included'},
                      {key:'Constellation of your choice'}  ,{key:'.'}                                       ]
 nameOption2:any=[{key:'Free Gift',},{key:'Free Gift-Second Gift pack'},
                      {key:'Lifetime registry record'},{key:'Visible from your location'},
                      {key:'Gift Folder'},{key:'Electric files included'},
                      {key:'Extra bright,easy navigation'},{key:'Suitable for double names and couples'}                    ]
nameOption3:any=[{key:'Free Gift-Star Map',},
                    {key:'Lifetime registry record'},{key:'Visible from your location'},
                    {key:'Registration certificate'},{key:'Gift Folder'},
                    {key:'Electric files included'},{key:'.'},{key:'.'} ]
            

}
