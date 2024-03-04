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

  constructor(private router: Router, private service:SharedserviceService) {}

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
