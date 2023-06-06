import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  public handleHttpError(error: HttpErrorResponse): void {
    // just as an example, error handling should be more complex than this haha
    console.error(error);
  }
}
