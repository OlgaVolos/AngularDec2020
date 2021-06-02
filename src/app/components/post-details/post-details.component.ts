import { Component, OnInit } from '@angular/core';
import {Post} from "../../../models/post";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../../services/post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
fullPost: Post;
  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.activatedRoute.params.subscribe(value => {
      console.log(value.id)
    this.postService.getPost(value.id).subscribe(post => this.fullPost = post)
      })
  }

  ngOnInit(): void {
  }

}
