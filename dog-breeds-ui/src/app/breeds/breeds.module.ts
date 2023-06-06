import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreedsRoutingModule } from './breeds-routing.module';
import { BreedsListComponent } from './components/breeds-list/breeds-list.component';
import { BreedDetailComponent } from './components/breed-detail/breed-detail.component';


@NgModule({
  declarations: [
    BreedsListComponent,
    BreedDetailComponent
  ],
  imports: [
    CommonModule,
    BreedsRoutingModule
  ],
  exports: [
    BreedsListComponent
  ]
})
export class BreedsModule { }
