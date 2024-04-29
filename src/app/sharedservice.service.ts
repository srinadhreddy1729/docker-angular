import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  constructor( @Inject(PLATFORM_ID) private platformId: Object){}

  
  isAuthenticated(): boolean {

    if (isPlatformBrowser(this.platformId)) {

      return !!localStorage.getItem("userdata");
    }
    else{
      return false;
    }
    
  }


  
  
}
