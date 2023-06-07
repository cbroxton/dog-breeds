import { createReducer, on } from "@ngrx/store";
import { Breed } from "../models/breed.model";
import { BreedsApiActions } from "./breeds.actions";

export const initialState: ReadonlyArray<Breed> = [];

export const breedsReducer = createReducer(
  initialState,
  on(BreedsApiActions.retrievedBreeds, (_state: ReadonlyArray<Breed>, { breeds }: { breeds: ReadonlyArray<Breed> }) => breeds)
)
