import { Component, OnInit } from '@angular/core';
import { iAppState } from '../store/app.state';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { desincrementarNumber, incrementNumber, loadArray, loadItems, loadTodos } from '../store/app.action';
import { Observable, map } from 'rxjs';
import { selectArrayApi, selectListItems, selectLoading } from '../store/app.selector';
import { ItemModel, Itodo } from '../store/app.model';

@Component({
  selector: 'app-ng-rx',
  templateUrl: './ng-rx.component.html',
  styleUrls: ['./ng-rx.component.scss']
})
export class NgRxComponent implements OnInit{

  loading$: Observable<boolean> = new Observable()
  array$: Observable<ItemModel[]> = new Observable()
  counter$ = this.storeNumber.select('app').pipe( map(e => e.conter) )

  constructor(
    private router: Router,
    private storeNumber:Store<{ app: iAppState}>,
    private store:Store<any>) {}

    ngOnInit(): void {

      this.loading$ = this.store.select(selectLoading)
      this.array$ = this.store.select(selectListItems) //array is here

      this.storeNumber.dispatch(loadTodos())
    }

    addArrayNew(){
      this.store.dispatch(loadArray())
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
