import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

user = {login: '', password: ''}
  constructor() { }

  ngOnInit(): void {
  }

  submit(myForm: NgForm) {
    // console.log(this.user); //виведе нашу форму з ключами ,як в об"єкті user та значеннями
    // // що є введені в інпут
    // console.log(myForm['login']['value']); //виведе інформацію з форми
    // console.log(myForm.password.value)
    console.log(myForm) // виводить ту ж, але цілісну інформацію про форму
  }
}
