import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedsListComponent } from './components/breeds-list/breeds-list.component';
import { BreedDetailComponent } from './components/breed-detail/breed-detail.component';

// as part of a full app these routes might be under a breeds suffix or something but for purpose of this
// we're using the root and defining all routes in here
const routes: Routes = [
  { path: '', component: BreedsListComponent },
  { path: 'breeds/:id', component: BreedDetailComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreedsRoutingModule { }
