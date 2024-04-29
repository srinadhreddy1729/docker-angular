import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
function _window():any{
  return window;
}
@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  get nativeWindow():any
  {
return _window();
  }

  constructor(private http:HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {

  }

 url:any="https://api.anystarregistration.com";

  getting(data:any):Observable<any[]>
  {
return this.http.post<any[]>(`${this.url}`+"/post",data);
  }
  Fetting(data:any):Observable<any[]>
  {
return this.http.post<any[]>(`${this.url}`+"/add",data);
  }
  mail(data:any):Observable<any[]>
  {
return this.http.post<any[]>(`${this.url}`+"/email",data);
  }
  Resetpassword(email:any,newpassword:any):Observable<any[]>
  {   
  
return this.http.post<any[]>(`${this.url}`+"/resetpassword",{email:email,newpassword:newpassword});
  }
  updateTheValues(login:any):Observable<any[]>
  {
return this.http.post<any[]>(`${this.url}`+"/changeDetails",login);
  }
  insertingUserAddress(userAddress:any):Observable<any>
  {
    return this.http.post<any[]>(`${this.url}`+"/UpdatingUserAddress",userAddress)
  }
  paymentDetails(paymentDetails:any):Observable<any>
  {
    return this.http.post<any[]>(`${this.url}`+'/addpaymentdetails',paymentDetails)
  }
  gettingUserDataById(RegistryNumber:any):Observable<any>
  {
    return this.http.post<any[]>(`${this.url}`+'/getUserDetailsId',{RegistryNumber:RegistryNumber});
  }
  gettingStarById(id:any):Observable<any>
  {
    return this.http.post<any[]>(`${this.url}`+'/getdata',{id:id});
  }
generateOrder(Order:any):Observable<any>
{
  return this.http.post<any[]>(`${this.url}`+'/createOrder',Order)
}
CertificateSending(UserConfirmDetails:any):Observable<any[]>
{
  return this.http.post<any[]>(`${this.url}`+'/certificatesending',UserConfirmDetails)
  

}

getUserCountry(): Observable<string> {
  return new Observable<string>(observer => {
    if (isPlatformBrowser(this.platformId)) {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.http.get<any>('https://nominatim.openstreetmap.org/reverse?format=json&lat=' + position.coords.latitude + '&lon=' + position.coords.longitude)
            .subscribe((response: any) => {
              observer.next(response.address.country);
              observer.complete();
            });
        },
        error => {
          observer.error(error);
          observer.complete();
        }
      );
    }
    } else {
      observer.error('Geolocation is not supported by this browser.');
      observer.complete();
    }
  });
}
getCountryData(country: string): Observable<any> {
  return this.http.get<any>('https://restcountries.com/v3.1/name/' + country);
}
}