import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadItems } from '../store/app.action';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent implements OnInit{

  constructor(private store:Store<any>) {}

  ngOnInit(): void {
  }
}
