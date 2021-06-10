import { Component, OnInit } from '@angular/core';
import {User} from "../../interfaces";
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
username: string
  user: User
  constructor(private dataTransfer: DataTransferService) {
    this.dataTransfer.store.subscribe(value => this.username = value)
  }

  ngOnInit(): void {
  }

}
