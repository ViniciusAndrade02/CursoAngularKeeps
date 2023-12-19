import { ActionReducerMap } from '@ngrx/store';
import { Itodo } from './app.model';
import { itemsReducer } from './app.reducer';
import { AppAllState } from './app.selector';


export interface iAppState {
  conter: number;
  todos:Itodo[];
}

export const ROOT_REDUCER:ActionReducerMap<AppAllState> = {
  items: itemsReducer
}

