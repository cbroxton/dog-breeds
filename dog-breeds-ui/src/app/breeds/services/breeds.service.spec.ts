import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

import { BreedsService } from './breeds.service';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Breed } from '../models/breed.model';
import { BaseUrl } from 'src/app/shared/constants/server-config.constants';

describe('BreedsService', () => {
  let httpTestingController: HttpTestingController;
  let errorHandlerSpy: ErrorHandlerService;
  let service: BreedsService;

  beforeEach(() => {
    errorHandlerSpy = jasmine.createSpyObj<ErrorHandlerService>('errorHandlerService', ['handleHttpError']);

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: ErrorHandlerService, useValue: errorHandlerSpy }
      ]
    });
    service = TestBed.inject(BreedsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAllBreeds', () => {
    it('should make correct http request and return correct data when no error', () => {
      const mockBreeds: Breed[] = [
        {
          id: 1,
          name: 'breed 1',
          description: 'description 1',
          imageUrl: 'image 1',
          additonalInfo: 'additional info 1'
        },
        {
          id: 2,
          name: 'breed 2',
          description: 'description 2',
          imageUrl: 'image 2'
        }
      ];

      service.getAllBreeds().subscribe((data: Breed[]) => {
        expect(data).toEqual(mockBreeds);
      });
      const request: TestRequest = httpTestingController.expectOne(`${BaseUrl}/breeds`);
      request.flush(mockBreeds);

      expect(request.request.method).toEqual('GET');
      httpTestingController.verify();
    });

    it('should call error handler when error occurs', () => {
      const expectedError = { example: 'error' };

      service.getAllBreeds().subscribe({
        next: () => fail('should have thrown an error'),
        error: (error: HttpErrorResponse) => {
          expect(error.error).toBe(expectedError);
        }
      });
      const request: TestRequest = httpTestingController.expectOne(`${BaseUrl}/breeds`);
      request.flush(expectedError, { status: 500, statusText: 'error' });

      expect(errorHandlerSpy.handleHttpError).toHaveBeenCalled();
    });
  });

  describe('getBreedById', () => {
    it('should make correct http request and return correct data when no error', () => {
      const id = 2;
      const mockBreed: Breed = {
        id: 2,
        name: 'breed 2',
        description: 'description 2',
        imageUrl: 'image 2'
      };

      service.getBreedById(id).subscribe((data: Breed) => {
        expect(data).toEqual(mockBreed);
      });
      const request: TestRequest = httpTestingController.expectOne(`${BaseUrl}/breeds/${id}`);
      request.flush(mockBreed);

      expect(request.request.method).toEqual('GET');
      httpTestingController.verify();
    });

    it('should call error handler when error occurs', () => {
      const id = 2;
      const expectedError = { example: 'error' };

      service.getBreedById(id).subscribe({
        next: () => fail('should have thrown an error'),
        error: (error: HttpErrorResponse) => {
          expect(error.error).toBe(expectedError);
        }
      });
      const request: TestRequest = httpTestingController.expectOne(`${BaseUrl}/breeds/${id}`);
      request.flush(expectedError, { status: 500, statusText: 'error' });

      expect(errorHandlerSpy.handleHttpError).toHaveBeenCalled();
    });
  });
});
