import { createAction, props } from "@ngrx/store";
import { Currency } from "src/app/models/currency";

export const addCurrencies = createAction('[Currency] - Add', props<{ currencies: Currency[] }>());