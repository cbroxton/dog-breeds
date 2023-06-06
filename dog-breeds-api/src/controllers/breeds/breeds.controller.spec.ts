import { Test, TestingModule } from '@nestjs/testing';
import { BreedsController } from './breeds.controller';
import { BreedsService } from '../../services/breeds/breeds.service';
import { DataProviderService } from '../../services/shared/data-provider.service';

describe('BreedsController', () => {
  let controller: BreedsController;

  let breedsService: BreedsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BreedsController],
      providers: [BreedsService, DataProviderService],
    }).compile();

    controller = module.get<BreedsController>(BreedsController);
    breedsService = module.get<BreedsService>(BreedsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllBreeds', () => {
    it('should call getAllBreeds on breedsService', () => {
      const getAllBreedsSpy = jest.spyOn(breedsService, 'getAllBreeds');

      controller.getAllBreeds();

      expect(getAllBreedsSpy).toHaveBeenCalled();
    });
  });

  describe('getBreedById', () => {
    it('should call getBreedById on breedsService', () => {
      const id = 10;
      const getBreedByIdSpy = jest.spyOn(breedsService, 'getBreedById');

      controller.getBreedById(id);

      expect(getBreedByIdSpy).toHaveBeenCalledWith(id);
    });
  });
});
