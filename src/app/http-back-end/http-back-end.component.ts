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
  loading: boolean = false;

  constructor(private http: HttpClient, private postService: PostService) {
  }

  ngOnInit(): void {
    this.loadingData();

    setInterval(() => {
      this.loadingDataWithoutLoad()
    }, 1000);
  }

  onCreatePost(postData: Post) {
    this.postService.createAndStrePost(postData.title, postData.content);

  }

  loadingDataWithoutLoad(){
    this.postService.fetchPosts().subscribe((posts) => {
      this.loadedPosts = posts
    });
  }


  loadingData(){
    this.loading = false;
    this.postService.fetchPosts().subscribe((posts) => {
      this.loading = true;
      this.loadedPosts = posts
    });
  }

  teste(){
    console.log(this.postService.atualizarPost)
  }


  excluir(indexDelete: number) {
    const id = this.loadedPosts[indexDelete].id; // Pegar o ID na array que você quer remover

    this.http
      .delete(
        `https://primeiro-test-67f48-default-rtdb.firebaseio.com/posts/${id}.json`
      )
      .subscribe((response) => {
        console.log('Post removido com sucesso', response);
      });

    this.loadedPosts.map((item, index) => {
      if (index == indexDelete) {
        this.loadedPosts.splice(index,1)
      }
    });
  }

  removeAll(){
    this.postService.deleteAllPosts().subscribe(() => {
      this.loadedPosts = []
    })
  }

  atualizarPost() {
    const id = this.loadedPosts[1].id; // chave criptografada
    const mensagemNova = 'leite';

    const newData = {
      title: mensagemNova, // Novo título desejado
      content: this.loadedPosts[1].content, // Mantenha o conteúdo existente ou modifique conforme necessário
    };

    console.log('esta funcionando?',newData)

    this.http
      .patch(
        `https://primeiro-test-67f48-default-rtdb.firebaseio.com/posts/${id}.json`,
        newData
        
      )
      .subscribe((response) => {
        console.log(response);
        this.loadingData();
      });
  }

}
