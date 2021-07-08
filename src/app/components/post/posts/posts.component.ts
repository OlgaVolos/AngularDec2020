import { Component, OnInit } from '@angular/core';
import {Post} from "../../../models";
import {PostService} from "../../../services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts: Post[];
userId: number;

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.userId = +value.id;
      this.postService.getPostByUserId(this.userId).subscribe(post => this.posts = post)
    })
  }

  ngOnInit(): void {
  }

}
