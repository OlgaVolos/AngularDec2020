import { Component, OnInit } from '@angular/core';
import {IPost} from "../../../../models";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../../../services/post.service";

@Component({
  selector: 'app-posts-user',
  templateUrl: './posts-user.component.html',
  styleUrls: ['./posts-user.component.css']
})
export class PostsUserComponent implements OnInit {

  posts: IPost[];
  userId: number;
  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.activatedRoute.params.subscribe(value => {
      this.userId = +value.id;
      this.postService.getPostByUserId(this.userId).subscribe(post => this.posts = post)

    })
  }

  ngOnInit(): void {
  }

}
