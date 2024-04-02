import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
import { UniversalComponent } from './universal/universal.component';
import { PaymentgatewayComponent } from './paymentgateway/paymentgateway.component';
import { BoxComponent } from './box/box.component';
import { StarMapComponent } from './star-map/star-map.component';
import { StarMapEntryComponent } from './star-map-entry/star-map-entry.component';
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
    UniversalComponent,
    PaymentgatewayComponent,
    BoxComponent,
    StarMapComponent,
    StarMapEntryComponent
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule,ToastrModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
        CommonModule,
        

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
