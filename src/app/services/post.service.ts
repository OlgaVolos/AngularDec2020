import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../models/IPost";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/'


  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(this.url + 'posts')
  }

  getPostByUserId(userId: number): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(this.url + 'posts?userId=' + userId)
  }
}
