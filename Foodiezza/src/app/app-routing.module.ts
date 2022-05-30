import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { FooterComponent } from './components/footer/footer.component';
import { OurSpecialsComponent } from './components/our-specials/our-specials.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"header",component:HeaderComponent},
  {path:"log-in",component:LogInComponent},
  {path:"our-specials",component:OurSpecialsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  CommonModule,
BrowserModule],
  exports: [RouterModule]

})
export class AppRoutingModule { }
