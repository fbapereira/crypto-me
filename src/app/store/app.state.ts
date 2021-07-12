import { Currency } from "../models/currency";

export interface AppState {
    currencies: ReadonlyArray<Currency>;
    favorites: ReadonlyArray<Currency>;
}