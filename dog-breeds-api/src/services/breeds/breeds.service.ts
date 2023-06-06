import { Injectable } from '@nestjs/common';
import { DataProviderService } from '../shared/data-provider.service';
import { Breed } from '../../models/breeds/breed.model';

@Injectable()
export class BreedsService {
  // Injecting a data provider service to get the json data here purely so I can mock the data and demonstrate how I'd
  // test that the functions are i.e. returning full data set and filtered data set. Irl this might be a service getting
  // data from i.e. sql server.
  constructor(private dataProviderService: DataProviderService) {}

  public getAllBreeds(): Breed[] {
    return this.dataProviderService.breeds;
  }

  public getBreedById(id: number): Breed | undefined {
    // triple === didn't seem to work here, didn't quite figure out why
    return this.dataProviderService.breeds.find((breed) => breed.id == id);
  }
}
