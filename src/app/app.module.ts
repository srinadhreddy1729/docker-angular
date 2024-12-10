import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, NgModel } from '@angular/forms';
import { WhystarregComponent } from './whystarreg/whystarreg.component';
import { MenubarComponent } from './menubar/menubar.component';
import { FindyoustarComponent } from './findyoustar/findyoustar.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { AddressComponent } from './address/address.component';
import { HeaderComponent } from './header/header.component';
import { SignoutComponent } from './signout/signout.component';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StarregistartionComponent } from './starregistartion/starregistartion.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { ReviewsComponent } from '../../../ExampleForLearning/src/app/reviews/reviews.component';
import { PaymentgatewayComponent } from './paymentgateway/paymentgateway.component';
import { BoxComponent } from './box/box.component';
import { StarMapComponent } from './star-map/star-map.component';
import { StarMapEntryComponent } from './star-map-entry/star-map-entry.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatError, MatFormField, MatInputModule, MatLabel} from '@angular/material/input';
import { PayPaymentComponent } from './pay-payment/pay-payment.component';
import { StraCertificateComponent } from './stra-certificate/stra-certificate.component';
import { HowManyStarsareInnasadatabaseComponent } from './how-many-starsare-innasadatabase/how-many-starsare-innasadatabase.component';
import { ZodiacComponent } from './zodiac/zodiac.component';
import { ContinueShoppingComponent } from './continue-shopping/continue-shopping.component';
import { TermsandconditionComponent } from './termsandcondition/termsandcondition.component';
import { RefundpolicyComponent } from './refundpolicy/refundpolicy.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ShippingPolicyComponent } from './shipping-policy/shipping-policy.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    FindyoustarComponent,
    EditDetailsComponent,
    CustomerdetailsComponent,
    AddressComponent,
    HeaderComponent,
    SignoutComponent,
    StarregistartionComponent,
    PaymentDetailsComponent,
    ReviewsComponent,
    PaymentgatewayComponent,
    BoxComponent,
    StarMapComponent,
    StarMapEntryComponent,
    PayPaymentComponent,
    StraCertificateComponent,
    HowManyStarsareInnasadatabaseComponent,
    ZodiacComponent,
    ContinueShoppingComponent,
    TermsandconditionComponent,
    RefundpolicyComponent,
    AboutusComponent,
    ShippingPolicyComponent,
    AddtocartComponent,
       ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule,ToastrModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    CommonModule
    
        
        

  ],
  providers: [
    
    provideClientHydration(),
          provideAnimationsAsync()
  //   ,
  //   {
  //   provide: HTTP_INTERCEPTORS,
  //   useValue: tokenInterceptorInterceptor,
  //   multi: true
  // }
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
