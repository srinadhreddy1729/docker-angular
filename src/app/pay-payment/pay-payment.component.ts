import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../backend-service.service';
import * as currency from '../../assets/Information.json';
import { Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HostAddress } from 'typeorm';
import { json } from 'express';

@Component({
  selector: 'app-pay-payment',
  templateUrl: './pay-payment.component.html',
  styleUrl: './pay-payment.component.css',
})
export class PayPaymentComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private service: BackendServiceService
  ) {}

  payamount: number = 2900;
  paymentSuccess: boolean = false;
  imageContent: any;
  productType: any;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      var data: any = localStorage.getItem('userRegistrationData');
      var tt = JSON.parse(data);
      this.imageContent = tt.imagesrc;
    }
  }

  pay() {
    if (
      localStorage.getItem('ueutrywtrytewy$^%%#$@$@$@') ===
      '*(%^&#%$$@#@$)&%*^$%^$!@#$^%&^HJGHFHGBJVHGCD%^$&&)*(&*&)4gshfcgs'
    ) {
      this.payamount = currency.rates[0].frame1;
      this.productType = currency.rates[0].cardOne;
    } else if (
      localStorage.getItem('ueutrywtrytewy$^%%#$@$@$@') ===
      'idwhedg275463564172%%^$$!@#$%^^%#$$@##@#@fggfg#$%#$%#%%fgg@#$!#@#@#$'
    ) {
      this.payamount = currency.rates[0].frame2;
      this.productType = currency.rates[0].cardTwo;
    }
    if (
      localStorage.getItem('ueutrywtrytewy$^%%#$@$@$@') ===
      '56476846ghjfhjdgfjewhaskjf9-309$^%#$#%$^&fgjhfg#%$%8675@@%%$$&^%HGHFHH4649?&*797GJKHJKHJ'
    ) {
      this.payamount = currency.rates[0].frame3;
      this.productType = currency.rates[0].cardThree;
    }
    var payUserDetails: any = localStorage.getItem('confirmUserDetails');
    const originalUserData = JSON.parse(payUserDetails);

    const orderData = {
      name: 'AnyStarRegistration',
      amount: this.payamount,
      description: 'Star Buying',
      userName: originalUserData.nameOfTheStar,
      email: originalUserData.useremail,
      contactNumber: originalUserData.Telephone,
    };

    this.service.generateOrder(orderData).subscribe(
      (res: any) => {
        if (res.success) {
          this.initiateRazorpayPayment(res);
        } else {
          alert(res.msg);
        }
      },
      (error: any) => {
        console.error('Error generating order:', error);
        alert('Something went wrong. Please try again later.');
      }
    );
  }

  private initiateRazorpayPayment(orderDetails: any) {
    const options = {
      key_id:"rzp_test_gOixQNUmgsnHsy",
      amount: orderDetails.amount,
      currency: 'INR',
      name: orderDetails.product_name,
      description: orderDetails.description,
      image: '/assets/Task@star-registration.in/anystar.png',
      order_id: orderDetails.order_id,
      handler: (response: any) => {
        alert('Payment Succeeded');
        try {
          this.paymentSuccess = true;
          const ConfirmDetails: any =
            localStorage.getItem('confirmUserDetails');
          const Details = JSON.parse(ConfirmDetails);
          Details.productType = this.productType;
          Details.Amount = this.payamount;
          localStorage.setItem(
            'confirmUserDetails12345',
            JSON.stringify(Details)
          );
          const UserDetails: any = localStorage.getItem(
            'confirmUserDetails12345'
          );
          const User = JSON.parse(UserDetails);

          if (this.service.CertificateSending(User).subscribe()) {
            localStorage.removeItem('userRegistrationData');
            localStorage.removeItem('confirmUserDetails12345');
            localStorage.removeItem('confirmUserDetails');
            localStorage.removeItem('ueutrywtrytewy$^%%#$@$@$@');
          }
        } catch (e) {
          console.log(e);
        }
      },
      prefill: {
        contact: orderDetails.contact,
        name: orderDetails.name,
        email: orderDetails.email,
      },
      notes: {
        description: orderDetails.description,
      },
      theme: {
        color: '#2300a3',
      },
    };
    const razorpayObject = new this.service.nativeWindow.Razorpay(options);
    razorpayObject.on('payment.failed', (response: any) => {
      alert('Payment Failed');
    });
    razorpayObject.open();
  }
}
