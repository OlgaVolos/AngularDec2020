import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';


import {HttpClientModule} from "@angular/common/http";
import {UserService} from "../../services/user.service";
import { PostsUserComponent } from './components/posts-user/posts-user.component';
import { PostUserComponent } from './components/post-user/post-user.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    PostsUserComponent,
    PostUserComponent,



  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [UserService]
})
export class UserModule { }
