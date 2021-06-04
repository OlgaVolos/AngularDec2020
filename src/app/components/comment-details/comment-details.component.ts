import {Component,  OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Comment} from "../../../models/comment";
@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  fullComment: Comment;

  constructor(private activatedRoute: ActivatedRoute) {
      }

  ngOnInit(): void {
    this.fullComment = this.activatedRoute.snapshot.data['id']
  }

}
