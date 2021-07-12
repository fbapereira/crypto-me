import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectFavorites = createSelector(
    (state: AppState) => state.favorites,
    (currencies) => currencies
)