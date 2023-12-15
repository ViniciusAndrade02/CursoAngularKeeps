import { createReducer, on } from "@ngrx/store"
import { desincrementarNumber, incrementNumber } from "./app.action"

export interface iAppState{
  conter: number
}

export const appInitalState:iAppState ={
  conter: 10 
}

export const appReducer = createReducer(
  appInitalState,
  on(incrementNumber, (state) => {
    state = {
      ...state,
      conter: state.conter + 1
    }
    return state
  }),

  on(desincrementarNumber, (state) => {
    state = {
      ...state,
      conter: state.conter - 1
    }
    return state
  })
)