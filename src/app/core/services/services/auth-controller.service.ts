/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { login } from '../fn/auth-controller/login';
import { Login$Params } from '../fn/auth-controller/login';
import { ResponseDto } from '../models/response-dto';

@Injectable({ providedIn: 'root' })
export class AuthControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `login()` */
  static readonly LoginPath = '/ibp/v1/auth/login';

  /**
   * Authenticate.
   *
   * Tries to authenticate a user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `login()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login$Response(params: Login$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseDto>> {
    return login(this.http, this.rootUrl, params, context);
  }

  /**
   * Authenticate.
   *
   * Tries to authenticate a user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `login$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login(params: Login$Params, context?: HttpContext): Observable<ResponseDto> {
    return this.login$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseDto>): ResponseDto => r.body)
    );
  }

}
