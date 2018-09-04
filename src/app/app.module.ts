import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FooddeliveryComponent } from './pages/fooddelivery/fooddelivery.component';
import { CourierservicesComponent } from './pages/courierservices/courierservices.component';
import { HttpClientModule } from '@angular/common/http';
import { SponsorsComponent } from './pages/sponsors/sponsors.component';
import { BottomNavbarComponent } from './pages/bottom-navbar/bottom-navbar.component';
import { HomeNavbarComponent } from './pages/home-navbar/home-navbar.component';
import { UserComponent } from './pages/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    FooddeliveryComponent,
    CourierservicesComponent,
    SponsorsComponent,
    BottomNavbarComponent,
    HomeNavbarComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
