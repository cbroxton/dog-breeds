import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { MonoTypeOperatorFunction, Observable, tap } from "rxjs";
import { Breed } from "../models/breed.model";
import { ErrorHandlerService } from "src/app/shared/services/error-handler.service";

@Injectable({
  providedIn: 'root'
})
export class BreedsService {
  private readonly baseUrl = 'http://localhost:3000';
  private readonly endpointBase = 'breeds'

  private errorHandler: MonoTypeOperatorFunction<any> = tap({
    error: (error: any) => this.errorHandlerService.handleHttpError(error)
  });

  constructor(
    private httpClient: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) {}

  public getAllBreeds(): Observable<Breed[]> {
    // normally might have a base http service or perhaps an interceptor or something to ensure the correct
    // base url is used for the environment but just doing this slight bodge here and below to keep it simple
    return this.httpClient.get<Breed[]>(`${this.baseUrl}/${this.endpointBase}`)
      .pipe(this.errorHandler);
  }

  public getBreedById(id: number): Observable<Breed[]> {
    return this.httpClient.get<Breed>(`${this.baseUrl}/${this.endpointBase}/${id}`)
      .pipe(this.errorHandler);
  }
}
