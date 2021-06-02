import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/post";
import {PostService} from "../../services/post.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input()
  post: Post;
  posts: Post[];
  constructor() { }

  ngOnInit(): void {
      // this.postService.getPostByUserId(this.post.userId).subscribe(value => {
      //   const postById = this.posts.filter(post => post.userId === user.id )
      // })


  }

}
