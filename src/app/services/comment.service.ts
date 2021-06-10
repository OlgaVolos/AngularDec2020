import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Omment} from "../models";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url = 'https://jsonplaceholder.typicode.com/'

  constructor(private httpClient: HttpClient) { }

  getComments(): Observable<Omment[]>{
    return this.httpClient.get<Omment[]>(this.url + 'comments')
  };

  getCommentByPostId(postId: number): Observable<Omment[]>{
    return this.httpClient.get<Omment[]>(this.url + 'comments?postId=' + postId)
  }
}
