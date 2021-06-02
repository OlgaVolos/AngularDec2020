import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Comment} from "../models/comment";
@Injectable({
  providedIn: 'root'
})
export class CommentsResolveService implements Resolve<Comment[]>{
comments: Comment[];

private url = 'https://jsonplaceholder.typicode.com/comments'
  constructor(private httpClient: HttpClient ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Comment[]> | Promise<Comment[]> | Comment[] {
    return this.httpClient.get<Comment[]>(this.url);
  }



  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
  //   return new Promise((res, reject)=>{
  //     setTimeout(()=>{
  //       res('ok');
  //       console.log("done")
  //     }, 3000) // поки дані не прийдуть, ми не зрендеримо нічого. Це просто приклад
  //   });
  // }


}
