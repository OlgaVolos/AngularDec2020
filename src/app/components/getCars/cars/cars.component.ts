import {Component, OnInit} from '@angular/core';
import {Car} from "../../../interfaces";
import {CarService} from "../../../services";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
cars: Car[]
  constructor(private carService: CarService) { }

  ngOnInit(): void {
  this.carService.getCars().subscribe(value => this.cars = value)
  }

}
