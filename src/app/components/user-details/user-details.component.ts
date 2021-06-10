import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../interfaces";
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
@Input()
singleUser: User;
  constructor(private dataTransfer: DataTransferService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.dataTransfer.store.next(this.singleUser.username)

  }
}
