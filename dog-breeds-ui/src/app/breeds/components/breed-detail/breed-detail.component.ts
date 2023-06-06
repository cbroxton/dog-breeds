import { Component, OnInit } from '@angular/core';
import { Breed } from '../../models/breed.model';
import { Location } from '@angular/common';
import { BreedsService } from '../../services/breeds.service';

@Component({
  selector: 'app-breed-detail',
  templateUrl: './breed-detail.component.html',
  styleUrls: ['./breed-detail.component.scss']
})
export class BreedDetailComponent implements OnInit {
  public breed: Breed | undefined;

  constructor(
    private location: Location,
    private breedsService: BreedsService
  ) {}

  ngOnInit(): void {
    const routeState: any = this.location.getState();

    // just prevents an uncessary http call if we can pass the data through from the listing page
    if (routeState?.breed) {
      this.breed = routeState.breed;
    } else {
      // would normally do an unsubscribe on component destroy but left out here to save time.
      // this one would likely be safe as it's a http call but good practice anyway imo.

    }
  }
}
