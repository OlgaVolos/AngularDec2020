import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Comment} from "../../../models/comment";
@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  @Input()
  fulComment: Comment;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => console.log(value.details))
  }

  ngOnInit(): void {
  }

}
