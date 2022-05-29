import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  {path:"home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  CommonModule,
BrowserModule],
  exports: [RouterModule]

})
export class AppRoutingModule { }
