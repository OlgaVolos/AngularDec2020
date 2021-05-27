import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 users: User[];

  // private httpClient : HttpClient
  // constructor( http: HttpClient) {
  //   this.httpClient = http;
  // } ангулар працює ін"єкційно. Все, що пишемо в конструкторі, це є вимога
  // Він самостійно шукає, де це покласти. Все, що необхідно, ми просто впроваджуємо
  // як частину конструктора. знизу коротка конструкція, екземпляр юзер-компонентс
  // і цю всю фігню переносимо в сервіси
  constructor(private userService : UserService) {

  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => {
      this.users = value
    });

  }

}
