import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {UserComponent} from "./components/user/user.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";

const routes: Routes = [
  //це дочірній шлях, тому він вже в собі має /users.
  // в дочірньому пишемо або пустоту, або ід
  // а потім вже як хочемо - або новою урл, або чілдренами
  {path: '', component: UsersComponent, children: [
    //users/id
      {path: ':id', component: UserDetailsComponent}
    ]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
