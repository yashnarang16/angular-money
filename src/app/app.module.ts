import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routing } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule, } from 'angularfire2';
import {  AngularFireDatabase } from 'angularfire2/database';
import { firebaseConfig } from './constant.config';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthServiceService } from './services/auth-service.service';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SuiModule } from 'ng2-semantic-ui';
import { ParticlesModule } from 'angular-particle';
import { BookingsComponent } from './bookings/bookings.component';
import { BookingsListComponent } from './bookings-list/bookings-list.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    BookingsComponent,
    BookingsListComponent,
    AddCustomerComponent,
    TransactionListComponent,
    UserListComponent,
    PaymentComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    Routing,
    SuiModule,
    ParticlesModule

  ],
  providers: [AuthServiceService, AngularFireAuth, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
