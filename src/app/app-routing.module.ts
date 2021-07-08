import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {CarsComponent} from "./components/getCars/cars/cars.component";
import {AddCarComponent} from "./components/add-car/add-car.component";


let routes: Routes = [
  {path: '', component: HomeComponent},
      {path: '', redirectTo: 'cars', pathMatch: 'full'},
      {path: 'cars', component: CarsComponent},
      {path: 'add', component: AddCarComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
