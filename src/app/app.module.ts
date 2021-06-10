import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/app/app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    HeaderComponent,
    UserDetailsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule


  ],
  providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
