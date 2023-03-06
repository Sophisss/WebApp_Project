import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//IMPORT COMPONENT
import { HomeComponent } from './components/pages/home/home.component';
import { InfoComponent } from './components/pages/info/info.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { CardComponent } from './components/pages/dashboard/card/card.component';
import { BookingComponent } from './components/pages/dashboard/booking/booking.component';
import { GiftsComponent } from './components/pages/dashboard/gifts/gifts.component';
import { TreatmentsComponent } from './components/pages/dashboard/treatments/treatments.component';
import { SignUpComponent } from './components/authentication/auth_user/sign-up/sign-up.component';
import { LoginComponent } from './components/authentication/auth_user/login/login.component';
import { LoginEmpComponent } from './components/authentication/auth_employee/login-emp/login-emp.component';
import { SignupEmpComponent } from './components/authentication/auth_employee/signup-emp/signup-emp.component';
import { AuthGuard } from './components/authentication/services/auth.guard';
import { AccountComponent } from './components/pages/dashboard/account/account.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'info', component: InfoComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'login-user', component: LoginComponent },
  { path: 'signup-user', component: SignUpComponent },
  { path: 'login-emp', component: LoginEmpComponent },
  { path: 'signup-emp', component: SignupEmpComponent },

  {
    path: 'dashboard/user', component: DashboardComponent, //canActivate: [AuthGuard],
    children: [
      {
        path: 'account', component: AccountComponent, //canActivate: [AuthGuard],
      },
      {
        path: 'card', component: CardComponent, //canActivate: [AuthGuard]
      },
      {
        path: 'booking', component: BookingComponent, //canActivate: [AuthGuard]
      },
      {
        path: 'gifts', component: GiftsComponent, //canActivate: [AuthGuard]
      },
      {
        path: 'treatments', component: TreatmentsComponent, //canActivate: [AuthGuard]
      }
    ]
  },
  //dashboard/employee/:id
  {
    path: 'dashboard/employee', component: DashboardComponent, //canActivate: [AuthGuard],
    children: [
      {
        path: 'account', component: AccountComponent, //canActivate: [AuthGuard],
      },
      {
        path: 'card', component: CardComponent, //canActivate: [AuthGuard]
      },
      {
        path: 'card/:id', component: CardComponent, //canActivate: [AuthGuard]
      },
      {
        path: 'booking', component: BookingComponent, //canActivate: [AuthGuard]
      },
      {
        path: 'gifts', component: GiftsComponent, //canActivate: [AuthGuard]
      },
      {
        path: 'treatments', component: TreatmentsComponent, //canActivate: [AuthGuard]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }