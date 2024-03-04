import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  
  isAuthenticated(): boolean {

      return !!localStorage.getItem("userdata");
    
  }
  
}
