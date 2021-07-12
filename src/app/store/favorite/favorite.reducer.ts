import { createReducer, on, Action } from '@ngrx/store';
import { Currency } from 'src/app/models/currency';
import { addFavorite, alertFavorite, removeFavorite } from './favorite.actions';

export const initialState: ReadonlyArray<Currency> = [];

export const favoritesReducer = createReducer(
    initialState,
    on(alertFavorite, (state, ) => {
        alert('ohio');
        return [...state];
    }),
    on(addFavorite, (state, { currency }) => [...state, currency]),
    on(removeFavorite, (state, { currency }) => state.filter((value) => value.id !== currency.id))
);