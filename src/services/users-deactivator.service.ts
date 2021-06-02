import { Injectable } from '@angular/core';
import {CanDeactivate} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UsersDeactivatorService implements CanDeactivate<boolean>{

  constructor() { }

  canDeactivate(): boolean {
    return confirm("Leave from user's page?") ;
  }

  // canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return undefined; // можна зробити всі імпорти, можна все видалити і залишити булеан
  // }



}
