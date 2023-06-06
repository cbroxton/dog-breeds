import { Component, OnInit } from '@angular/core';
import { Breed } from '../../models/breed.model';
import { BreedsService } from '../../services/breeds.service';

@Component({
  selector: 'breeds-list',
  templateUrl: './breeds-list.component.html',
  styleUrls: ['./breeds-list.component.scss']
})
export class BreedsListComponent implements OnInit {
  public breeds: Breed[] | undefined;

  constructor(private breedsService: BreedsService) {}

  public ngOnInit(): void {
    // would normally do an unsubscribe on component destroy but left out here to save time.
    // this one would likely be safe as it's a http call but good practice anyway imo.
    this.breedsService.getAllBreeds().subscribe(breeds => this.breeds = breeds);
  }
}
