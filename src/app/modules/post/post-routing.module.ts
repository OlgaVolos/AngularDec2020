import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "./components/posts/posts.component";
import {CommentsPostComponent} from "./components/comments-post/comments-post.component";

const routes: Routes = [
  {path: '', component: PostsComponent, children: [
      {path: ':id', component: CommentsPostComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
