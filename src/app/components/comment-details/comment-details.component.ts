import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Comment} from "../../../models/comment";
import {CommentService} from "../../../services/comment.service";
@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  fullComment: Comment;

  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
    this.activatedRoute.params.subscribe(value => {
      console.log(value.id);

    this.commentService.getComment(value.id).subscribe(comment => this.fullComment = comment)
      })}

  ngOnInit(): void {

  }

}
// constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
//   this.activatedRoute.params.subscribe(value => {
//     this.id = +value.id;
//     this.commentService.getComment(this.id).subscribe(comment => this.fullUser = comment  )
