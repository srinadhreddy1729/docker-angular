import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { AddtocartService } from '../services/addtocart.service';
import { products } from '../interfaces/proudct';
import { OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-cart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css'],
})
export class AddtocartComponent implements OnInit {
  public cartItems: any[] = [];
  public cartLength: number = this.cartItems.length;

  constructor(private addtocartService: AddtocartService) {}

  ngOnInit(): void {
    this.cartItems = this.addtocartService.getAllCartProducts();
    this.cartLength = this.cartItems.length;
  }

  public removeFromCart(productId: number):void {
    this.addtocartService.removeFromCart(productId);
    this.cartItems = this.addtocartService.getAllCartProducts();
    this.cartLength = this.cartItems.length;
  }

  public getTotalPrice():number {
    return this.cartItems.reduce(
      (total, item) =>
        total + item.product_discount_cost * item.product_quantity,
      0
    );
  }

  public increaseProductQuantity(product_id: number):void {
    const existingElement = this.cartItems.find((product) => {
      return product.product_id === product_id;
    });
    if (existingElement) {
      existingElement.product_quantity = existingElement.product_quantity + 1;
    }
  }
  public decreaseProductQuantity(product_id: number) {
    const existingElement = this.cartItems.find((product) => {
      return product.product_id === product_id;
    });
    if (existingElement) {
      existingElement.product_quantity = existingElement.product_quantity - 1;
      if (existingElement.product_quantity <= 0) {
        this.addtocartService.removeFromCart(existingElement.product_id);
        this.cartItems = this.addtocartService.getAllCartProducts();
        this.cartLength = this.cartItems.length;
      }
    }
  }
}
