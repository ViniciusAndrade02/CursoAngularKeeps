import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from './http-back-end.model';
import { PostService } from './posts.service';

@Component({
  selector: 'app-http-back-end',
  templateUrl: './http-back-end.component.html',
  styleUrls: ['./http-back-end.component.scss'],
})
export class HttpBackEndComponent implements OnInit {
  //POST --> ENVIA
  loadedPosts: Post[] = [];
  loading:boolean = false

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.fetchPosts().subscribe( posts => {
      this.loading= true
      this.loadedPosts = posts
    })
  }

  onCreatePost(postData: Post) {
    this.postService.createAndStrePost(postData.title,postData.content)
  }

  removePost(){
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }
}

