import { createAction, props } from "@ngrx/store";
import { Currency } from "src/app/models/currency";

export const alertFavorite = createAction('[Favorite] - Alert');
export const addFavorite = createAction('[Favorite] - Add', props<{ currency: Currency }>());
export const removeFavorite = createAction('[Favorite] - Remove', props<{ currency: Currency }>());