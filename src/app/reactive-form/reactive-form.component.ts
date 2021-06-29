import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  /*inputs object*/
loginControl = new FormControl('def login', [Validators.required, Validators.minLength(2), this.customValidator])
// passwordControl = new FormControl('def password') можна не писати і
//  визначати одразу у формі

  /*form object*/
  myFormGroup: FormGroup = new FormGroup({
    login: this.loginControl,
    password: new FormControl('def password')

  });
  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log(this.myFormGroup)
  }

  customValidator(control: AbstractControl){
    console.log(control);
    if(control.value.includes('fuck')){
      return { fuckPresent: true}
    }
    return null
  }
}

// loginControl: FormControl = new FormControl('def login') типізацію не вказуємо, бо якщо об"єкт ініціалізований,
// якимось класом, то можна не писати по ньому типізацію
// формгрупи можна формувати в конструкторі, також є формбілдери
