import {Component, Input, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {IPost} from "../../../../models";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input()
post: IPost;
postId: number;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }


  GetComments(): void {
  this.router.navigate([this.post.id], {relativeTo: this.activatedRoute})

  }
}
