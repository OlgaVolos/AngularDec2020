import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { UsersComponent } from './components/user/users/users.component';
import { UserComponent } from './components/user/user/user.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { PostsComponent } from './components/post/posts/posts.component';
import { PostComponent } from './components/post/post/post.component';


let routes: Routes = [
  {path: '', component: UsersComponent, children: [
      {path: ':id', component: PostsComponent}
    ]}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),


  ],
  providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
