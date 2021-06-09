import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {PostService} from "../../services/post.service";
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { CommentsPostComponent } from './components/comments-post/comments-post.component';
import {CommentService} from "../../services/comment.service";
import { CommentPostComponent } from './components/comment-post/comment-post.component';


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    CommentsPostComponent,
    CommentPostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  providers: [PostService,
  CommentService]
})
export class PostModule { }
