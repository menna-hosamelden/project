import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about copy/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailsComponent } from './components/details/details.component';
import { DonateComponent } from './components/donate/donate.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Home كصفحة افتراضية
  {path: 'home', component:HomeComponent},
  {path: 'cart', component:CartComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forget', component: ForgetPasswordComponent },
  { path: 'product-form', component: ProductFormComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'donate', component: DonateComponent },
  {path: 'details/:id', component:DetailsComponent},
  {path: '**', component:NotFoundComponent}
];
