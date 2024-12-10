import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar1/navbar.component';
import { PhotosComponent } from './photos/photos.component';
import { ShootingStarComponent } from './shooting-star/shooting-star.component';
import { GalaxyComponent } from './galaxy/galaxy.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { VideoComponent } from './video/video.component';
import { DatabaseComponent } from './database/database.component';
import { MailComponent } from './mail/mail.component';
import { MessageComponent } from './message/message.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { MiddleComponent } from './middle/middle.component';
import { WhystarregComponent } from './whystarreg/whystarreg.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FindyoustarComponent } from './findyoustar/findyoustar.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { AddressComponent } from './address/address.component';
import { HeaderComponent } from './header/header.component';
import { SignoutComponent } from './signout/signout.component';
import { StarregistartionComponent } from './starregistartion/starregistartion.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentgatewayComponent } from './paymentgateway/paymentgateway.component';
import { BoxComponent } from './box/box.component';
import { ReviewsComponent } from '../../../ExampleForLearning/src/app/reviews/reviews.component';
import { StarMapEntryComponent } from './star-map-entry/star-map-entry.component';
import { StarMapComponent } from './star-map/star-map.component';
import { MenubarComponent } from './menubar/menubar.component';
import { PayPaymentComponent } from './pay-payment/pay-payment.component';
import { StraCertificateComponent } from './stra-certificate/stra-certificate.component';
import { HowManyStarsareInnasadatabaseComponent } from './how-many-starsare-innasadatabase/how-many-starsare-innasadatabase.component';
import { ZodiacComponent } from './zodiac/zodiac.component';
import { ContinueShoppingComponent } from './continue-shopping/continue-shopping.component';
import { authGuard } from './auth.guard';
import { RefundpolicyComponent } from './refundpolicy/refundpolicy.component';
import { TermsandconditionComponent } from './termsandcondition/termsandcondition.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ShippingPolicyComponent } from './shipping-policy/shipping-policy.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
      {
       path:'',component:NavbarComponent
      },
      {
        path:'constellation-table',component:PhotosComponent
      },
      
      {
        path:'menu',component:MenubarComponent
      },
      {
        path:'shooting-star',component:ShootingStarComponent
      },
      {
        path:'paymentdetails',component:PaymentDetailsComponent
      },
    
      {
      path:'galaxy',component:GalaxyComponent
    
    },
    {
     path:'contact',component:ContactComponent
    },
    {
      path:'home',component:NavbarComponent
     },
     {
      path:'MyAccount',component:BoxComponent
    
    },
    {
      path:'star-registration',component:StarregistartionComponent

    },
    {
      path:'footer',component:FooterComponent
    },
    {
      path:'order',component:DropdownsComponent
    
    },
    {
      path:'video',component:VideoComponent
    },
    {
      path:'data',component:DatabaseComponent
    },
    {
      path:'mail',component:MailComponent
    },
    {
      path:'refund-policy',component:RefundpolicyComponent

    },
    {
      path:'terms-and-conditions',component:TermsandconditionComponent

    }
    ,
    {
      path:'mess',component:MessageComponent
    },
    {
      path:'privacy-policy',component:PrivacypolicyComponent
    },
    {
      path:'middle',component:MiddleComponent
    },
    {
      path:'whyStar',component:WhystarregComponent
    },
    {
      path:'gallery',component:GalleryComponent
    }
    ,
    {
      path:"findyourstar",component:FindyoustarComponent
    }
    ,
    {
      path:'mydetails',component:CustomerdetailsComponent,canActivate:[authGuard]
    },
    {
      path:"edit",component:EditDetailsComponent
    },
    {
      path:'address',component:AddressComponent
    },
    {
      path:'header',component:HeaderComponent
    },
    {
      path:'signout',component:SignoutComponent
    },
    {
      path:'StarMap',component:StarMapComponent
    },
    
    {
      path:'paymentgateway',component:PaymentgatewayComponent

    },
    {
     path:'StarMapEntry',component:StarMapEntryComponent
    },
    {
      path:'review',component:ReviewsComponent
    },
    {
      path:'paypayment',component:PayPaymentComponent
    },
    {
      path:'shipping-policy',component:ShippingPolicyComponent
    },
    {
      path:'starcertificate',component:StraCertificateComponent
    },
    {
      path:'how-many-stars-are-in-nasa-database',component:HowManyStarsareInnasadatabaseComponent
    },
    {
      path:'zodiac',component:ZodiacComponent
    },
    {
      path:'box',component:BoxComponent
    },
    {
      path:'continue-shopping',component:ContinueShoppingComponent
    },
    {
      path:'about-us',component:AboutusComponent
    }
    ,
    {
      path:'cart',component:AddtocartComponent
    },
    {
      path:'product',component:ProductComponent
    }
 
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


