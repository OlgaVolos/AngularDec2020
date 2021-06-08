import { Component, OnInit } from '@angular/core';
import {IUser} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
fullUser: IUser;
id: number;
  constructor(private router: Router, private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe(params =>{
      this.fullUser = this.router.getCurrentNavigation()?.extras.state as IUser
    })
  }

  ngOnInit(): void {
  }

}
