import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Actions, createEffect, ofType  } from '@ngrx/effects'
import { loadTodos, sucessTodos,setTodos } from "./app.action";
import { switchMap,tap,map, } from "rxjs/operators";

import { Store } from '@ngrx/store';
import { Itodo } from "../app.component";
import { iAppState } from "./app.state";

@Injectable({
  providedIn:'root'
})

export class Effects{

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<{app: iAppState}>
    ) {}

    carregaTodos = createEffect(
      () => this.actions$.pipe(
        ofType(loadTodos),
        switchMap(() =>
          this.http.get<Itodo[]>('https://jsonplaceholder.typicode.com/todos')
            .pipe(
              tap(todos => this.store.dispatch(setTodos({ payload: todos }))),
              map(() => sucessTodos())
            )
        )
      )
    );
}