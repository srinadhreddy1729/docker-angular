import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { products } from "../interfaces/proudct";

@Injectable({
  providedIn: 'root',
})
export class AddtocartService {
  public items: products[] = [];

  constructor(private http: HttpClient) {
    const savedItems = localStorage.getItem("cart");
    if (savedItems) {
      this.items = JSON.parse(savedItems); 
    }
  }

  public getAllCartProducts() {
    return this.items;
  }

  public addToCart(item: any) {
    // const existingProduct:any = this.items.find(
    //   (ele) => ele.product_id === item.product_id
    // );
    // if (existingProduct) {
    //   existingProduct.product_quantity += item.product_quantity;
    // } else {
    //   this.items.push(item);
    // }
          this.items.push(item);


    localStorage.setItem("cart", JSON.stringify(this.items));
    console.log('Cart updated', this.items);
  }

  public removeFromCart(productId: number) {
    this.items = this.items.filter(item => item.product_id !== productId);
    localStorage.setItem("cart", JSON.stringify(this.items));
  }

}
