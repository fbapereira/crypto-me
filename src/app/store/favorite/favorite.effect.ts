import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, mergeMap, switchMap, tap } from "rxjs/operators";
import { addFavorite, alertFavorite } from "./favorite.actions";

@Injectable()
export class FavoriteEffects {
    addFavorite$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addFavorite),
            map(() => alertFavorite())
        )
    )

    constructor(
        private actions$: Actions
    ) { }
}