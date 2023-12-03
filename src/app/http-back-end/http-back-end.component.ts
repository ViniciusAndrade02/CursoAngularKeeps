import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewRef } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from './http-back-end.model';
import { PostService } from './posts.service';
import { FormGroup, NgForm, Validator } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-http-back-end',
  templateUrl: './http-back-end.component.html',
  styleUrls: ['./http-back-end.component.scss'],
})
export class HttpBackEndComponent implements OnInit {
  //POST --> ENVIA
  @ViewChild('postForm') signForm!: NgForm

  loadedPosts: Post[] = [];
  loading: boolean = false;
  showEdit: number = -1;
  title!: string;
  description!: string;
  intervalId: any;
  signupForm!: FormGroup;

  constructor(private http: HttpClient, private postService: PostService, private location:Location) {}

  startInterval() {
    this.intervalId = setInterval(() => {
      this.loadingDataWithoutLoad();
    }, 1000);
  }

  ngOnInit(): void {
    this.loadingData();
    this.startInterval();
  }

  onCreatePost(postData: Post) {
    this.postService.createAndStrePost(postData.title, postData.content);
    this.signForm.reset()
  }

  removeAll() {
    this.postService.deleteAllPosts().subscribe(() => {
      this.loadedPosts = [];
    });

    this.location.replaceState(this.location.path())
  }

  voltar(){
    this.location.replaceState(this.location.path())
    this.showEdit = -2;
  }

  excluir(indexDelete: number) {
    this.postService.deleteMessage(this.loadedPosts[indexDelete].id);
    this.showEdit = -2;

    clearInterval(this.intervalId);

    this.loadedPosts.map((item, index) => {
      if (index == indexDelete) {
        this.loadedPosts.splice(index,1)
      }
    });

    setTimeout(() => {
      this.startInterval();
    }, 1000);

  }

  loadingDataWithoutLoad() {
    this.postService.fetchPosts().subscribe((posts) => {
      this.loadedPosts = posts;
    });
  }

  editar(uploadEdit: number) {
    this.showEdit = uploadEdit;
    clearInterval(this.intervalId);
  }

  EnviarEdit(idEdit:number) {

    this.loading = false;
    this.postService.updatePost(this.loadedPosts[idEdit].id,this.title,this.description)

    setTimeout(() => {
      this.startInterval();
    }, 1000);

    this.showEdit = -1;
    this.description = ""
    this.title = ""
    this.loading = true;
  }

  loadingData() {
    this.loading = false;
    this.postService.fetchPosts().subscribe((posts) => {
      this.loading = true;
      this.loadedPosts = posts;
    });
  }
}
