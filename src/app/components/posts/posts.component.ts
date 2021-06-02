import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/post";
import {PostService} from "../../services/post.service";
import {User} from "../../models/user";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
 post: Post;
  userId: number;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPostsByUsersID(this.userId).subscribe(value => this.posts = value)




  }



}
