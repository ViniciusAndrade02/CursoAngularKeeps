import { Component, OnInit } from '@angular/core';
import { iAppState } from '../store/app.state';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { desincrementarNumber, incrementNumber, loadItems, loadTodos } from '../store/app.action';
import { Observable, map } from 'rxjs';
import { selectArrayApi, selectLoading } from '../store/app.selector';
import { Itodo } from '../store/app.model';

@Component({
  selector: 'app-ng-rx',
  templateUrl: './ng-rx.component.html',
  styleUrls: ['./ng-rx.component.scss']
})
export class NgRxComponent implements OnInit{

  loading$: Observable<boolean> = new Observable()
  counter$ = this.storeNumber.select('app').pipe( map(e => e.conter) )

  constructor(
    private router: Router,
    private storeNumber:Store<{ app: iAppState}>,
    private store:Store<any>) {}

    ngOnInit(): void {

      this.loading$ = this.store.select(selectLoading)

      this.storeNumber.dispatch(loadTodos())
    }

  
  incrementaNumero(){
    this.storeNumber.dispatch(incrementNumber())
  }

  reduzNumero(){
    this.storeNumber.dispatch(desincrementarNumber())
  }

  changeBollean(){
    this.store.dispatch(loadItems())
  }
}
