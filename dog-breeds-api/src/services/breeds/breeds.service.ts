import { Injectable } from '@nestjs/common';
import { DataProviderService } from '../shared/data-provider.service';
import { Breed } from '../../models/breeds/breed.model';

@Injectable()
export class BreedsService {
  constructor(private dataProviderService: DataProviderService) {}

  public getAllBreeds(): Breed[] {
    return this.dataProviderService.breeds;
  }

  public getBreedById(id: number): Breed | undefined {
    return this.dataProviderService.breeds.find((breed) => breed.id === id);
  }
}
