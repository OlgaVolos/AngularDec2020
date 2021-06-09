import {Component, Input, OnInit} from '@angular/core';
import {IComment} from "../../../../models";

@Component({
  selector: 'app-comment-post',
  templateUrl: './comment-post.component.html',
  styleUrls: ['./comment-post.component.css']
})
export class CommentPostComponent implements OnInit {
@Input()
comment: IComment
  constructor() { }

  ngOnInit(): void {
  }

}
