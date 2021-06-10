import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../interfaces";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Input()
user: User;


  @Output()
  userLift = new EventEmitter<User>()
  constructor( ) { }

  ngOnInit(): void {
  }

  choseUser(): void {
    this.userLift.emit(this.user)

  } //передаємо його на users!!!
}
