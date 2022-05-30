import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { FooterComponent } from './components/footer/footer.component';
//import { RatingModule } from 'ng-starrating';
//import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { OurSpecialsComponent } from './components/our-specials/our-specials.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,    
    FooterComponent,
    LogInComponent,
    //ComponentsComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    OurSpecialsComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // RatingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
