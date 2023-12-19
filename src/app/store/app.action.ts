import { createAction, props } from '@ngrx/store';
import { Itodo } from './app.model';
import { ItemModel } from './app.model';

export const loadItems = createAction('[Item List] Load items');

export const loadedItems = createAction(
  '[Item List] Loaded sucess',
  props<{ items: ItemModel[] }>()
);

export const incrementNumber = createAction('[App] Aumenta numero');
export const desincrementarNumber = createAction('[App] Diminuir numero');

export const loadTodos = createAction('[App] Carregar todos');
export const setTodos = createAction(
  '[App] Define Todos',
  props<{ payload: Itodo[] }>()
);
export const sucessTodos = createAction('[App] [Sucesss] todos');
