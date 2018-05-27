import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { UserListComponent } from './user-list/user-list.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';

// Route Configuration
export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: TransactionListComponent },
      { path: 'addUser', component: AddCustomerComponent },
      { path: 'userList', component: UserListComponent },
      { path: 'payment', component: PaymentComponent },
      {path: 'profile', component: ProfileComponent }
    ]


  }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
