import { createReducer, on } from '@ngrx/store';
import { iAppState } from './app.selector';
import {
  desincrementarNumber,
  incrementNumber,
  loadArray,
  loadItems,
  setTodos,
} from './app.action';
import { ItemsState } from './app.selector';
import { ItemModel } from './app.model';

export const initalState: ItemsState = {
  loading: false,
  items: [{
    name:'Vinicius',
    price:12,
    image:'ss'
  }],
};

export const itemsReducer = createReducer(
  initalState,
  on(loadItems, (state) => {
    state = {
      ...state,
      loading: !state.loading,
    };
    return state;
  }),
  on(loadArray, (state) => {
    const newArray: ItemModel[] = [
      { name: 'cleiton', price: 120, image: 'naosei' },
    ];
    return { ...state, items: [...state.items, ...newArray] };
  })
);

export const appInitalState: iAppState = {
  conter: 10,
  todos: [],
};

export const appReducer = createReducer(
  appInitalState,
  on(incrementNumber, (state) => {
    state = {
      ...state,
      conter: state.conter + 1,
    };
    return state;
  }),

  on(desincrementarNumber, (state) => {
    state = {
      ...state,
      conter: state.conter - 1,
    };
    return state;
  }),

  on(setTodos, (state, { payload }) => {
    state = {
      ...state,
      todos: payload,
    };
    return state;
  })
);
