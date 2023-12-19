import { createSelector } from "@ngrx/store";
import { ItemModel } from "./app.model";

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