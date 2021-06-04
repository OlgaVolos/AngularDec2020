import {Injectable, Input} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Comment} from "../models/comment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentDetailsResolveService implements Resolve<Comment>{
  comment: Comment;
  private url = 'https://jsonplaceholder.typicode.com/comments'



  constructor(private httpClient: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Comment> | Promise<Comment> | Comment {

    return this.httpClient.get<Comment>(this.url + '/' + 'id');
  }


}
