import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { DropdownsComponent } from '../dropdowns/dropdowns.component';
import { RouterModule } from '@angular/router';
import { VideoComponent } from '../video/video.component';
import { MiddleComponent } from '../middle/middle.component';
import { WhystarregComponent } from '../whystarreg/whystarreg.component';
import { GalleryComponent } from '../gallery/gallery.component';
import '@angular/compiler';
import { BackendServiceService } from '../backend-service.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FooterComponent,CommonModule,DropdownsComponent,RouterModule,VideoComponent,MiddleComponent,WhystarregComponent,GalleryComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  
  userCountry: string='';
  countryData: any;

  constructor(private service: BackendServiceService) { }

  ngOnInit(): void {
    this.service.getUserCountry().subscribe(country => {
      this.userCountry = country;
      this.service.getCountryData(country).subscribe(data => {
        this.countryData = data[0]; 
      });
    });
  }

}
