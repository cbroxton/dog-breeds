import { Component, Input, OnInit } from '@angular/core';
import { Breed } from '../../models/breed.model';
import { Observable, map } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-breed-detail',
  templateUrl: './breed-detail.component.html',
  styleUrls: ['./breed-detail.component.scss']
})
export class BreedDetailComponent implements OnInit {
  @Input() id?: number;

  public breed$: Observable<Breed | undefined> | undefined;

  constructor(
    private store: Store<{ breeds: ReadonlyArray<Breed> }>
  ) {}

  ngOnInit(): void {
    this.breed$ = this.store.select(state => state.breeds)
      .pipe(
        map(breeds => breeds.find(breed => breed.id == this.id))
      );
  }
}
