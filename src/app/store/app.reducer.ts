import { createReducer, on } from '@ngrx/store';
import { ItemsState, iAppState } from './app.state';
import {
  desincrementarNumber,
  incrementNumber,
  loadItems,
  setTodos,
} from './app.action';

export const initalState: ItemsState = {
  loading: false,
  items: [],
};

export const itemsReducer = createReducer(
  initalState,
  on(loadItems, (state) => {
    state = {
      ...state, loading: true,
    }
    return state;
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
