import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getPostByUserId(userId: number): Observable<Post[]>{
    return this.httpClient.get<Post[]>(urls.posts, {
      params: new HttpParams({
        fromObject: {
          userId
        }
      })
    })
  }
}
