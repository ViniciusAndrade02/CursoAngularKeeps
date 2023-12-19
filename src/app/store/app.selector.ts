import { createSelector } from "@ngrx/store";
import { AppAllState, ItemsState } from "./app.state";

export const selectItemsFeature = (state:AppAllState) => state.items //faz parte do ItemsState

export const selectListItems = createSelector(
  selectItemsFeature,
  (state: ItemsState) => state.items //items faz parte da array
)

export const selectLoading = createSelector(
  selectItemsFeature,
  (state: ItemsState) => state.loading
)