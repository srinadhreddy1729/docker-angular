import { Component } from '@angular/core';
import { SharedserviceService } from '../sharedservice.service';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

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

  constructor(private router: Router, private service: SharedserviceService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.service.isAuthenticated();
    this.checkScreenSize();
    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });
  }

  checkScreenSize(): void {
    this.isSmallScreen = window.innerWidth <= 900;
  }

  navigateToAccount(): void {
    if (this.isLoggedIn) {
      this.router.navigate(['/mydetails']);
    } else {
      this.router.navigate(['/MyAccount']);
    }
  }

    toggleNav2(): void {
      console.log("Toggling Nav 2 visibility");
      this.nav2Visible = !this.nav2Visible;
    
  }

  toggleNav3(): void {
    this.nav3Visible = !this.nav3Visible;
  }
 

}
