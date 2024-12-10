import { Component } from '@angular/core';
import { products } from '../interfaces/proudct';
import { ProductService } from '../services/product.service';
import { AddtocartService } from '../services/addtocart.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  public total_products:products[] = [];



  public products:products[] = [
    {
      product_id: 1,
      product_name: "Happy Birthday Mirror Card",
      product_original_cost: 499.00,
      product_discount_cost: "399.00",
      product_image_url: "../../assets/Task@star-registration.in/product_images/image1.png",
      product_description: "Looking forward to making someone smile on their birthday? Surprise them with a Happy Birthday Mirror Card. A special card with a reflective finish to add "
    },
    {
      product_id: 2,
      product_name: "Ted Talks",
      product_original_cost: 899.00,
      product_discount_cost: "699.00",
      product_image_url: "../../assets/Task@star-registration.in/product_images/image2.png",
      product_description: "In need of inspiration? Ted Talks offer a variety of motivational and insightful talks. Perfect for anyone who enjoys learning and being inspired by world-class speakers."
    },
    {
      product_id: 3,
      product_name: "Best Friend Medal",
      product_original_cost: 799.00,
      product_discount_cost: "599.00",
      product_image_url: "../../assets/Task@star-registration.in/product_images/image3.png",
      product_description: "Show your appreciation with a Best Friend Medal. A perfect token of love to celebrate the bond you share with your best friend. A keepsake that speaks from the heart."
    },
    {
      product_id: 4,
      product_name: "Birthday Glitter Bomb",
      product_original_cost: 699.00,
      product_discount_cost: "499.00",
      product_image_url: "../../assets/Task@star-registration.in/product_images/image4.png",
      product_description: "Want to add a surprise element to their birthday? Send a Birthday Glitter Bomb! An exciting gift that explodes with colorful glitter, making their celebration even more fun."
    },
    {
      product_id: 5,
      product_name: "Cuddles",
      product_original_cost: 599.00,
      product_discount_cost: "399.00",
      product_image_url: "../../assets/Task@star-registration.in/product_images/image5.png",
      product_description: "Sometimes, all you need is a warm hug. Send your loved one the gift of Cuddles, a cozy and comforting surprise that brings warmth to their heart and a smile to their face."
    },
    {
      product_id: 6,
      product_name: "Wellness Calendar",
      product_original_cost: 1199.00,
      product_discount_cost: "899.00",
      product_image_url: "../../assets/Task@star-registration.in/product_images/image6.png",
      product_description: "Looking for a thoughtful gift? The Wellness Calendar encourages self-care with daily affirmations and wellness tips. A perfect gift for someone who values their well-being."
    },
    {
      product_id: 7,
      product_name: "Christmas Carol Audio Card",
      product_original_cost: 799.00,
      product_discount_cost: "599.00",
      product_image_url: "../../assets/Task@star-registration.in/product_images/image7.png",
      product_description: "Spread the joy of the holidays with a Christmas Carol Audio Card. A festive greeting card that plays cheerful Christmas carols when opened, bringing the spirit of the season alive."
    },
    {
      product_id: 8,
      product_name: "Couples Adventure Calendar",
      product_original_cost: 1499.00,
      product_discount_cost: "1099.00",
      product_image_url: "../../assets/Task@star-registration.in/product_images/image8.png",
      product_description: "Looking for a gift that creates memories? The Couples Adventure Calendar offers a new adventure every month, making it the perfect way for couples to bond."
    }
  ];


















  constructor(
    private service: ProductService,
    private addtocart: AddtocartService,
    private router:Router
  ) {}



  ngOnInit(): void {
    this.getAllProductDetails();
  }

  public getAllProductDetails() {
    // this.service.getProducts().subscribe((data: products[]) => {
    //   this.total_products = data;
    // });
    this.total_products=this.products
    console.log(this.products)
  }

  public addTocartPage(product: any) {
    const productWithQuantity = { ...product, product_quantity: 1 };
    this.addtocart.addToCart(productWithQuantity);
    this.router.navigate(['/cart'])

  }
}


