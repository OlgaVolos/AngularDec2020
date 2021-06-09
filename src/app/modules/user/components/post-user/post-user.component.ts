import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../../../models";

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})
export class PostUserComponent implements OnInit {
@Input()
post: IPost
  constructor() { }

  ngOnInit(): void {
  }

}
