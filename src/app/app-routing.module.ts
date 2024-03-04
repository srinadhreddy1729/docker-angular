import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar1/navbar.component';
import { PhotosComponent } from './photos/photos.component';
import { ShootingStarComponent } from './shooting-star/shooting-star.component';
import { GalaxyComponent } from './galaxy/galaxy.component';
import { ContactComponent } from './contact/contact.component';
import { MyAccountComponent } from './my-account/my-account.component';
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
import { UniversalComponent } from './universal/universal.component';


const routes: Routes = [
  {
    path:'',component:NavbarComponent
      },
      {
        path:'table',component:PhotosComponent
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
      path:'navbar',component:NavbarComponent
     },
     {
      path:'MyAccount',component:MyAccountComponent
    
    },
    {
      path:'star-registration',component:StarregistartionComponent

    },
    {
      path:'footer',component:FooterComponent
    },
    {
      path:'drop',component:DropdownsComponent
    
    },
    {
      path:'video',component:VideoComponent
    },
    {
      path:'data',component:DatabaseComponent
    },
    {
      path:'mail',component:MailComponent
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
      path:'mydetails',component:CustomerdetailsComponent
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
      path:'universal',component:UniversalComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


