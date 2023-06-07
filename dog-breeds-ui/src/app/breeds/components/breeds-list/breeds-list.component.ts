import { Component } from '@angular/core';
import { Breed } from '../../models/breed.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'breeds-list',
  templateUrl: './breeds-list.component.html',
  styleUrls: ['./breeds-list.component.scss']
})
export class BreedsListComponent {
  public breeds$: Observable<ReadonlyArray<Breed>> = this.store.select(state => state.breeds)

  constructor(
    private store: Store<{ breeds: ReadonlyArray<Breed> }>
  ) {}
}
