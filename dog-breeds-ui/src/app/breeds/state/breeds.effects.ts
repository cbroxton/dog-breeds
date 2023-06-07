import { Injectable } from "@angular/core";
import { Actions, OnInitEffects, createEffect, ofType } from "@ngrx/effects";
import { BreedsService } from "../services/breeds.service";
import { BreedsApiActions } from "./breeds.actions";
import { exhaustMap, map } from "rxjs";
import { Action } from "@ngrx/store";

@Injectable()
export class BreedsEffects implements OnInitEffects {
  constructor(
    private actions$: Actions,
    private breedsService: BreedsService
  ) {}

  ngrxOnInitEffects(): Action {
    return BreedsApiActions.loadBreeds();
  }

  loadBreeds$ = createEffect(() => this.actions$.pipe(
    ofType(BreedsApiActions.loadBreeds),
    exhaustMap(() =>
      this.breedsService.getAllBreeds()
        .pipe(
          map(breeds => BreedsApiActions.retrievedBreeds({ breeds }))
        )
    )
  ))
}
