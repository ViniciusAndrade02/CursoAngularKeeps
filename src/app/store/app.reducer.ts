import { createReducer, on } from "@ngrx/store";
import { appInitalState } from "./app.state";
import { desincrementarNumber, incrementNumber, setTodos } from "./app.action";

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