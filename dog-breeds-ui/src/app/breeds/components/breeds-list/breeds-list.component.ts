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
    this.breedsService.getAllBreeds().subscribe(breeds => this.breeds = breeds);
  }
}
