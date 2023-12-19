import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import { Itodo } from './app.model';
import { ItemModel } from './app.model';
import { itemsReducer } from './app.reducer';

export interface ItemsState{
  loading: boolean;
  items: ReadonlyArray<ItemModel>;
}

export interface iAppState {
  conter: number;
  todos:Itodo[];
}

export interface AppAllState{
  items: ItemsState
}

export const ROOT_REDUCER:ActionReducerMap<AppAllState> = {
  items: itemsReducer
}

