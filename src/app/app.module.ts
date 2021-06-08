import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import {PostResolveService} from "./services/post-resolve.service";
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import {UserResolveService} from "./services/user-resolve.service";

let routes: Routes = [
  {path: 'users', component: UsersComponent, resolve: {data: UserResolveService}, children: [
      {path: ':id', component: UserDetailsComponent}
    ]},
  {path: 'posts', component: PostsComponent, resolve: {xxx: PostResolveService}, children: [
      {path: ':id', component: PostDetailsComponent}
    ]}
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule


  ],
  providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
