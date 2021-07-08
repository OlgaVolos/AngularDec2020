import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CarService} from "../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  myForm: FormGroup;
  error: any;



  constructor(private carService: CarService, private router: Router) {
    this.myForm = new FormGroup({
      model: new FormControl(''),
      price: new FormControl(0),
      year: new FormControl(0)
    })
  }

  ngOnInit(): void {
  }

  addCar(): void {
    this.carService.saveCar(this.myForm.value).subscribe( () => {
      this.router.navigate(['cars'])
    }, ({error}) => {
      this.error = error
    } )

  }
}
