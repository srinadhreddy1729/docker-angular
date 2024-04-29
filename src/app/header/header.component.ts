import { SharedserviceService } from '../sharedservice.service';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  
  isLoggedIn: boolean = false;
  isSmallScreen: boolean = false;
  nav2Visible: boolean = false;
  nav3Visible: boolean = false;

  constructor(
    private router: Router,
    private service: SharedserviceService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

 
  ngOnInit(): void {
    this.isLoggedIn = this.service.isAuthenticated();
    
    
  }

  
  navigateToAccount(): void {
    if (this.isLoggedIn) {
      this.router.navigate(['/mydetails']);
    } else {
      this.router.navigate(['/MyAccount']);
    }
  }

  
}
