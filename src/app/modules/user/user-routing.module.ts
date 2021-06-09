import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {PostsUserComponent} from "./components/posts-user/posts-user.component";




const routes: Routes = [
  {path: '', component: UsersComponent, children: [
      {path: ':id', component: PostsUserComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
