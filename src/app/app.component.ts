import { Component, Input, OnInit } from '@angular/core';
import { RouterService } from './router/router.service';
import { desincrementarNumber, incrementNumber } from './store/app.action';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iAppState } from './store/app.state';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  counter$ = this.store.select('app').pipe( map(e => e.conter) )
  todos: Itodo[] = []

  constructor(
    private router: Router,
    private store:Store<{ app: iAppState}>,
    private http: HttpClient) {}


  incrementaNumero(){
    this.store.dispatch(incrementNumber())
  }

  reduzNumero(){
    this.store.dispatch(desincrementarNumber())
  }


  ngOnInit(): void {
    //this.router.navigate(['menu']);
    this.http.get<Itodo[]>('https://jsonplaceholder.typicode.com/todos')
    .subscribe({
      next: (res) => this.todos = res
    })
  }


  //Projeto Seção 5
  serverElement = [
    {
      type: 'server',
      name: 'teste',
      content: 'Just a test!',
    },
  ];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElement.push({
      type: 'serve',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }
  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElement.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }
}


export interface Itodo{
  userId: number,
  id: number,
  title: string,
  completed: boolean
}