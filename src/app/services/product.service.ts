import { Injectable } from '@angular/core';
import { constants } from '../constants/constanst';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { products } from '../interfaces/proudct';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private API_END_POINT: String;
  constructor(private service: HttpClient) {
    this.API_END_POINT = environment.API_END_POINT;
  }
  public getProducts(): Observable<products[]> {
    return this.service.get<products[]>(
      this.API_END_POINT + constants.API_GET_END_POINTS.get_products
    );
  }
  
}
