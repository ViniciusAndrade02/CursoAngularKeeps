import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./http-back-end.model";
import { map } from "rxjs";

@Injectable({
  providedIn:'root'
})

export class PostService{

  constructor(private http:HttpClient) {}

  createAndStrePost(title:string, content:string){
    const postData:Post= {title:title, content:content}
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
  fetchPosts(){
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
  }
    deletePosts(){
      return this.http.delete('https://primeiro-test-67f48-default-rtdb.firebaseio.com/posts.json')
    }
  }