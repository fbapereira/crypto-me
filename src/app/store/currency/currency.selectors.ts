import { createSelector } from "@ngrx/store"
import { AppState } from "../app.state"

export const selectCurrencies = createSelector(
    (state: AppState) => state.currencies,
    (currencies) => currencies,
)