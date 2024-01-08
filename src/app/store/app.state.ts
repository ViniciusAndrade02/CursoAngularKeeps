import { ActionReducerMap } from '@ngrx/store';
import { itemsReducer } from './app.reducer';
import { AppAllState } from './app.selector';


export const ROOT_REDUCER:ActionReducerMap<AppAllState> = {
  items: itemsReducer
}

