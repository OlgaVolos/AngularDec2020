import { Component } from '@angular/core';
import {User} from "../../interfaces";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [`app.component.css`]
})
export class AppComponent {
  title = 'angularDec2020';
user: User

  getUser(user: User): void {
  this.user = user;

  }
}

