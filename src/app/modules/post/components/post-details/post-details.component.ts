import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../models/IPost";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  @Input()
  id: number;
  fullPost: IPost;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.activatedRoute.params.subscribe(value => {
      this.id = +value.id;
      this.postService.getPost(this.id).subscribe(post => this.fullPost = post)
    })
  }

  ngOnInit(): void {
  }

}
