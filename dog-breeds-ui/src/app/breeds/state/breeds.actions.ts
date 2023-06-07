import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Breed } from "../models/breed.model";

export const BreedsApiActions = createActionGroup({
  source: 'Breeds API',
  events: {
    'Load Breeds': emptyProps(),
    'Retrieved Breeds': props<{ breeds: ReadonlyArray<Breed> }>()
  }
});
