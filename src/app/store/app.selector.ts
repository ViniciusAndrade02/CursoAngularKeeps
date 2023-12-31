import { createSelector } from "@ngrx/store";
import { ItemModel, Itodo } from "./app.model";
export interface ItemsState{
  loading: boolean;
  items: ItemModel[];
}

export interface AppAllState{
  items: ItemsState
}

export const selectItemsFeature = (state:AppAllState) => state.items //faz parte do ItemsState

export const selectListItems = createSelector(
  selectItemsFeature,
  (state: ItemsState) => state.items //items faz parte da array
)

export const selectLoading = createSelector(
  selectItemsFeature,
  (state: ItemsState) => state.loading
)


//Parte do API

export interface iAppState {
  conter: number;
  todos:Itodo[];
}

export interface AllApi{
  arrayApi: iAppState
}

export const selectArrayApi = (state:AllApi) => state.arrayApi

export const selectArrayItems = createSelector(
  selectArrayApi,
  (state:iAppState) => state.todos
)