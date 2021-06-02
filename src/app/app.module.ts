import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {HttpClientModule} from "@angular/common/http";
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from "./components/user/user.component";
import {RouterModule, Routes} from "@angular/router";
import {PostsComponent} from './components/posts/posts.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {PostComponent} from './components/post/post.component';
import {PostDetailsComponent} from "./components/post-details/post-details.component";
import {UsersDeactivatorService} from "../services/users-deactivator.service";
import {PostActivatorService} from "../services/post-activator.service";
import { CommentsComponent } from './components/comments/comments.component';
import {CommentsResolveService} from "../services/comments-resolve.service";
import { CommentComponent } from './components/comment/comment.component';



let routes: Routes = [
  {path: 'users',
    component: UsersComponent /* render into app*/ ,
    canDeactivate:[UsersDeactivatorService],
    children: [
      {path: ':id', component: UserDetailsComponent} /* render into UsersComponent*/
    ]},
  {path: 'posts', component: PostsComponent,
    canActivate:[PostActivatorService]

  }, /* render into app*/
  {path: 'posts/:id', component: PostDetailsComponent}, /* render into app*/
  {path: 'comments', component: CommentsComponent, resolve: {xxx: CommentsResolveService}}
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    UserDetailsComponent,
    PostComponent,
    PostDetailsComponent,
    CommentsComponent,
    CommentComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
