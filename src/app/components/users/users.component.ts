import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../../interfaces";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];



  @Output()

  userLift = new EventEmitter<User>();


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((value) => this.users = value)
  }

  chosenUser(user: User) {
    this.userLift.emit(user);


  }

  login() {

  }
}
