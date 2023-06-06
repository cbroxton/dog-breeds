import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreedsRoutingModule } from './breeds-routing.module';
import { BreedsListComponent } from './components/breeds-list/breeds-list.component';


@NgModule({
  declarations: [
    BreedsListComponent
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
