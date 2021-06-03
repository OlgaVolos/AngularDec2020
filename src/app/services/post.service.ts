import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = "https://jsonplaceholder.typicode.com/";

  constructor(private httpClient: HttpClient) {

  }

  getPosts(): Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.url)
  }


  getPostsByUsersID(userId: number) :Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url + 'posts?usersId=' + userId)
  }
}





