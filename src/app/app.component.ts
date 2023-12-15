import { Component, Input, OnInit } from '@angular/core';
import { RouterService } from './router/router.service';
import { desincrementarNumber, incrementNumber, loadTodos, setTodos } from './store/app.action';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iAppState } from './store/app.state';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  counter$ = this.store.select('app').pipe( map(e => e.conter) )

  //todos$!:Observable<Idolos[]> 
  todos = []

  constructor(
    private router: Router,
    private store:Store<{ app: iAppState}>,
    private http: HttpClient) {

      //this.todos$ = store.select('app')
    }


  incrementaNumero(){
    this.store.dispatch(incrementNumber())
    console.log(this.todos)
  }

  reduzNumero(){
    this.store.dispatch(desincrementarNumber())
  }


  ngOnInit(): void {
    //this.router.navigate(['menu']);
    this.store.dispatch(loadTodos())
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