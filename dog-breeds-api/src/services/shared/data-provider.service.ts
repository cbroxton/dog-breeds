import { Injectable } from '@nestjs/common';
import { Breed } from 'src/models/breeds/breed.model';
import * as breeds from '../../../data/breeds.json';

@Injectable()
export class DataProviderService {
  public get breeds(): Breed[] {
    return breeds;
  }
}
