import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { CarsComponent } from './components/getCars/cars/cars.component';
import { CarComponent } from './components/getCars/car/car.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AddCarComponent } from './components/add-car/add-car.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    HomeComponent,
    AddCarComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule


  ],
  providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
