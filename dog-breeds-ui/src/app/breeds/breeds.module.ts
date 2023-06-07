import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreedsRoutingModule } from './breeds-routing.module';
import { BreedsListComponent } from './components/breeds-list/breeds-list.component';
import { BreedDetailComponent } from './components/breed-detail/breed-detail.component';
import { StoreModule } from '@ngrx/store';
import { breedsReducer } from './state/breeds.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BreedsEffects } from './state/breeds.effects';


@NgModule({
  declarations: [
    BreedsListComponent,
    BreedDetailComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('breeds', breedsReducer),
    EffectsModule.forFeature(BreedsEffects),
    BreedsRoutingModule
  ],
  exports: [
    BreedsListComponent
  ]
})
export class BreedsModule { }
