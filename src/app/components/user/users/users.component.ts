import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services";
import {User} from "../../../models";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  user: User;
  myForm = new FormGroup({
    id: new FormControl('')
  });

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value)
  }

  show(): void {
    this.router.navigate([this.myForm.controls.id.value], {relativeTo: this.activatedRoute})



  }
}
