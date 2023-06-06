import { Controller, Get, Param } from '@nestjs/common';
import { Breed } from '../../models/breeds/breed.model';
import { BreedsService } from '../../services/breeds/breeds.service';

@Controller('breeds')
export class BreedsController {
  constructor(private breedsService: BreedsService) {}

  @Get()
  public async getAllBreeds(): Promise<Breed[]> {
    return this.breedsService.getAllBreeds();
  }

  @Get(':id')
  public async getBreedById(
    @Param('id') id: number,
  ): Promise<Breed | undefined> {
    return this.breedsService.getBreedById(id);
  }
}
