import { createAction, props } from '@ngrx/store';
import { Itodo } from './app.model';
import { ItemModel } from './app.model';

//Curso Espanhol
export const loadItems = createAction('[Item List] Load items');
export const loadArray = createAction('[Item Array] load Array') 
export const loadedItems = createAction(
  '[Item List] Loaded sucess',
  props<{ items: ItemModel[] }>()
);

//Curso Br
export const incrementNumber = createAction('[App] Aumenta numero');
export const desincrementarNumber = createAction('[App] Diminuir numero');

export const loadTodos = createAction('[App] Carregar todos');
export const setTodos = createAction(
  '[App] Define Todos',
  props<{ payload: Itodo[] }>()
);
export const sucessTodos = createAction('[App] [Sucesss] todos');
