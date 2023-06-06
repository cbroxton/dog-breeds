import { Test, TestingModule } from '@nestjs/testing';
import { BreedsService } from './breeds.service';
import { Breed } from '../../models/breeds/breed.model';
import { DataProviderService } from '../shared/data-provider.service';

describe('BreedsService', () => {
  const breeds: Breed[] = [
    {
      id: 1,
      name: 'dog 1',
      description: 'dog 1 description',
      imageUrl: 'dog 1 image',
    },
    {
      id: 2,
      name: 'dog 2',
      description: 'dog 2 description',
      imageUrl: 'dog 2 image',
    },
    {
      id: 3,
      name: 'dog 3',
      description: 'dog 3 description',
      imageUrl: 'dog 3 image',
    },
  ];

  let service: BreedsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        { provide: DataProviderService, useValue: { breeds } },
        BreedsService,
      ],
    }).compile();

    service = module.get<BreedsService>(BreedsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllBreeds', () => {
    it('should return all breeds', () => {
      const result: Breed[] = service.getAllBreeds();

      expect(result).toBe(breeds);
    });
  });

  describe('getBreedById', () => {
    it('should return correct breed for id', () => {
      const id = 2;
      const expectedBreed = breeds.find((breed) => breed.id === id);

      const result: Breed | undefined = service.getBreedById(id);

      expect(result).toBe(expectedBreed);
    });
  });
});
