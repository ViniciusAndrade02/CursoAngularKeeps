import { Component, Input, OnInit } from '@angular/core';
import { RouterService } from './router/router.service';
import { desincrementarNumber, incrementNumber, loadItems, loadTodos } from './store/app.action';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iAppState } from './store/app.state';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { selectLoading } from './store/app.selector';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  counter$ = this.store.select('app').pipe( map(e => e.conter) )
  loading$: Observable<boolean> = new Observable()


  //todos$!:Observable<Idolos[]> 
  todos = []

  constructor(
    private router: Router,
    private store:Store<{ app: iAppState}>,
    private storeApp:Store<any>,
    private http: HttpClient) {

      //this.todos$ = store.select('app')
    }


  incrementaNumero(){
    this.store.dispatch(incrementNumber())
  }

  reduzNumero(){
    this.store.dispatch(desincrementarNumber())
  }


  ngOnInit(): void {

    this.loading$ = this.storeApp.select(selectLoading)

    this.store.dispatch(loadTodos())
    this.store.dispatch(loadItems())
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


