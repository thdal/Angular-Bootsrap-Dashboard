import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Token } from '../../models/token';
import { TokenStorageService } from '../../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private authenticationUrl = '/api/tokens';
  private validateUrl = '/api/tokens';


  constructor(private httpClient: HttpClient,
              private tokenStorage: TokenStorageService) { }

  authentication(params: any): Observable<any> {
    return this.httpClient
        .post(environment.apiUrl + this.authenticationUrl, params)
        .pipe(map(data => data as Token), catchError((err: any) => err.code === 404 ? [] : throwError(err)));
  }

  passwordReset(params: any): Observable<any> {
    return this.httpClient
        .post(environment.apiUrl + this.validateUrl, params);
  }

}