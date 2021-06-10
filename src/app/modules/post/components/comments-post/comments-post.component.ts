import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../../../../services/comment.service";
import {IComment} from "../../../../models";

@Component({
  selector: 'app-comments-post',
  templateUrl: './comments-post.component.html',
  styleUrls: ['./comments-post.component.css']
})
export class CommentsPostComponent implements OnInit {
comments: IComment[];
postId: number;
  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
    this.activatedRoute.params.subscribe(value => {
      this.postId = +value.id;
      this.commentService.getCommentByPostId(this.postId).subscribe(comment => this.comments = comment)
    })

  }



  // constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
  //   this.activatedRoute.params.subscribe(({id}) => {
  //     this.commentService.getCommentByPostId(id).subscribe(comment => this.comments = comment)
  //   })
  //
  // } деструктуруємо ід, щоб не писати зайвого коду і тоді нам не треба прописувати ід: number

  ngOnInit(): void {
  }

}
