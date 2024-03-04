import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  constructor(private http:HttpClient) {

  }

 url:any="http://localhost:9090";

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
  gettingData():Observable<any[]>
  {
return this.http.get<any[]>(`${this.url}`+"/getUserData");
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
}
