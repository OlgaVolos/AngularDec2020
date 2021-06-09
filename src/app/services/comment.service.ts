import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment} from "../models";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url = 'https://jsonplaceholder.typicode.com/'

  constructor(private httpClient: HttpClient) { }

  getComments(): Observable<IComment[]>{
    return this.httpClient.get<IComment[]>(this.url + 'comments')
  };

  getCommentByPostId(postId: number): Observable<IComment[]>{
    return this.httpClient.get<IComment[]>(this.url + 'comments?postId=' + postId)
  }
}
