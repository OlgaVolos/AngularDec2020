import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService} from "../../services/comment.service";
import {IComment} from "../../models/IComment";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  id: number;
  fullComment: IComment

  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
    this.activatedRoute.params.subscribe(value => {
      this.id = +value.id;
      this.commentService.getComment(this.id).subscribe(comment => this.fullComment = comment)
    })
  }
  // constructor(private router: Router, private activatedRoute: ActivatedRoute ) {
  //   this.activatedRoute.params.subscribe(params => {
  //     this.fullComment = this.router.getCurrentNavigation()?.extras.state as IComment;  // console.log(history.state);
  //   })

  // }
  ngOnInit(): void {
  }

}
