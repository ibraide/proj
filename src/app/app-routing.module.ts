import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooddeliveryComponent } from './pages/fooddelivery/fooddelivery.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CourierservicesComponent } from './pages/courierservices/courierservices.component';
import { BottomNavbarComponent } from './pages/bottom-navbar/bottom-navbar.component';
import { SponsorsComponent } from './pages/sponsors/sponsors.component';
import { HomeNavbarComponent } from './pages/home-navbar/home-navbar.component';
import { UserComponent } from './pages/user/user.component';
import { AlertComponent } from './pages/alert/alert.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent},
  { path: 'fooddelivery', component: FooddeliveryComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'courierservices', component: CourierservicesComponent},
  { path: 'bottomnavbar', component: BottomNavbarComponent},
  { path: 'sponsors', component: SponsorsComponent},
  { path: 'homenavbar', component: HomeNavbarComponent},
  { path: 'alert', component: AlertComponent},
  { path: 'user', component: UserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
