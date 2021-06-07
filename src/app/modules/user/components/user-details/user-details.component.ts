import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUser} from "../../models/IUser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input()
id: number;
fullUser: IUser;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.activatedRoute.params.subscribe(value =>
    { console.log(history.state)
      this.id = +value.id;

      this.userService.getUser(this.id).subscribe(singleUser => this.fullUser = singleUser  )
    }
    )

  }

  ngOnInit(): void {
     }

}
