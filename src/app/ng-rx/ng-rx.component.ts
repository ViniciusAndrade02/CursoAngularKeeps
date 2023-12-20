import { Component, OnInit } from '@angular/core';
import { iAppState } from '../store/app.state';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { desincrementarNumber, incrementNumber, loadItems } from '../store/app.action';
import { Observable, map } from 'rxjs';
import { selectLoading } from '../store/app.selector';

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
