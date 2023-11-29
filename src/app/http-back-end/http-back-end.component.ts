import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from './http-back-end.model';

@Component({
  selector: 'app-http-back-end',
  templateUrl: './http-back-end.component.html',
  styleUrls: ['./http-back-end.component.scss'],
})
export class HttpBackEndComponent implements OnInit {
  //POST --> ENVIA
  loadedPosts: Post[] = [];
  loading:boolean = false

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    this.http
      .post<{name:string}>(
        'https://primeiro-test-67f48-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .pipe()
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }
  //fetch-->buscar
  //função para pegar todos os posts dentro do banco de dados
  fetchPosts() {
    this.loading = false
    return this.http
      .get('https://primeiro-test-67f48-default-rtdb.firebaseio.com/posts.json')
      .pipe(
        map((responseData: { [key: string]: any }) => {
          const postsArray:Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      )
      .subscribe(posts => {
        this.loading = true
        this.loadedPosts = posts
      })
  }
}

