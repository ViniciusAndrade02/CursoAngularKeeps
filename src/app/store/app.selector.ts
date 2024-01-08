import { createSelector } from "@ngrx/store";
import { ItemModel } from "./app.model";
import { iAppState } from "./app.state";

export interface ItemsState{
  loading: boolean;
  items: ReadonlyArray<ItemModel>;
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




export interface AllApi{
  arrayApi: iAppState
}

export const selectArrayApi = (state:AllApi) => state.arrayApi

export const selectArrayItems = createSelector(
  selectArrayApi,
  (state:iAppState) => state.todos
)