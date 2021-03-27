import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebsiteComponent } from './website/website.component';
import { WebsiteService } from './website/website.service';
import { Route } from '@angular/router';
import { RegisterComponent } from './user/register/user.register.component';
import { UserService } from './user/user.service';
import { LoginComponent } from './user/login/user.login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BookingService } from './user/Booking/book.service';
import { BookingComponent } from './user/Booking/booking.component';
import { BookingTourService } from './user/BookingTour/bookTour.service';
import { BookingTourComponent } from './user/BookingTour/bookingTour.component';
import { PaymentComponent } from './user/payment/payment.component';
import { PaymentService } from './user/payment/payment.service';
import { PaymentcopyService } from './user/payment copy/paymentcopy.service';
import { PaymentcopyComponent } from './user/payment copy/payment.componentcopy';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';
import { AboutusComponent } from './website/aboutus/aboutus.component';
import { GalleryComponent } from './user/gallery/gallery.component';
import { ContactusComponent } from './user/contactus/contactus.component';

const routes: Route[] =[
  {path: '',component:WebsiteComponent},
  { path: 'user-forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password/:id', component: ResetPasswordComponent },
 {path: 'website-component', component:WebsiteComponent},
 {path: 'login-component', component:LoginComponent},
 {path: 'register-component', component:RegisterComponent},
 {path: 'book-component', component:BookingComponent},
 {path: 'book-tour-component', component:BookingTourComponent},
 {path: 'payment-component', component:PaymentComponent},
 {path: 'paymentcopy-component', component:PaymentcopyComponent},
 {path: 'Aboutus-component', component:AboutusComponent},
 {path: 'gallery-component', component:GalleryComponent},
 {path: 'contact-component', component:ContactusComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    WebsiteComponent,
    RegisterComponent,
    LoginComponent,
    BookingComponent,
    BookingTourComponent,
    PaymentComponent,
    PaymentcopyComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    AboutusComponent,
    GalleryComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    WebsiteService,
    UserService,
    BookingService,
    BookingTourService,
    PaymentService,
    PaymentcopyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
