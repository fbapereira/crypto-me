import { Action, createReducer, on } from "@ngrx/store";
import { Currency } from "src/app/models/currency";
import { addCurrencies } from "./currency.actions";

export const initialState: Currency[] = [];

const _currencyReducer = createReducer(
    initialState,
    on(addCurrencies, (state, {currencies}) => state = currencies)
);

export const currencyReducer = (state: Currency[] | undefined, action: Action) => _currencyReducer(state, action);