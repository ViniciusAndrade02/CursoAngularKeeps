import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './http-back-end.model';
import { map } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  url:string = 'https://primeiro-test-67f48-default-rtdb.firebaseio.com'

  constructor(private http: HttpClient) {}

  createAndStrePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    
    this.http
      .post<{ name: string }>(
        `${this.url}/posts.json`,
        postData,
        {
          observe:'response'
        }
      )
      .subscribe((responseData) => {
        console.log(responseData)
      });
  }

  //fetch-->buscar
  //função para pegar todos os posts dentro do banco de dados
  fetchPosts() {
    return this.http
      .get(`${this.url}/posts.json`)
      .pipe(
        map((responseData: { [key: string]: any }) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      );
  }


  deleteAllPosts(){
    return this.http.delete(`${this.url}/posts.json`)
  }

  deleteMessage(idDelete:any){
    this.http
    .delete(
      `${this.url}/posts/${idDelete}.json`
    )
    .subscribe((response) => {
      console.log('Post removido com sucesso', response);
    });


  }

  updatePost(idUpload:any,titleEdit:string, descriptionEdit:string){

    const newData = {
      title: titleEdit, 
      content: descriptionEdit, 
    };

    this.http
      .patch(
        `${this.url}/posts/${idUpload}.json`,
        newData
        
      )
      .subscribe((upload) => {
        console.log('Post atualizado com sucesso', upload);
      });
  }



}
