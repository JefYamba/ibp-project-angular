/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getUrlImageBook$Jpeg } from '../fn/image/get-url-image-book-jpeg';
import { GetUrlImageBook$Jpeg$Params } from '../fn/image/get-url-image-book-jpeg';
import { getUrlImageBook$Png } from '../fn/image/get-url-image-book-png';
import { GetUrlImageBook$Png$Params } from '../fn/image/get-url-image-book-png';
import { getUrlImageUser$Jpeg } from '../fn/image/get-url-image-user-jpeg';
import { GetUrlImageUser$Jpeg$Params } from '../fn/image/get-url-image-user-jpeg';
import { getUrlImageUser$Png } from '../fn/image/get-url-image-user-png';
import { GetUrlImageUser$Png$Params } from '../fn/image/get-url-image-user-png';

@Injectable({ providedIn: 'root' })
export class ImageService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getUrlImageUser()` */
  static readonly GetUrlImageUserPath = '/ibp/v1/images/user/{imageName}';

  /**
   * Get User image profile [For admin or current logged only].
   *
   * fetch a user's image profile using the image complete name
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUrlImageUser$Png()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUrlImageUser$Png$Response(params: GetUrlImageUser$Png$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<string>>> {
    return getUrlImageUser$Png(this.http, this.rootUrl, params, context);
  }

  /**
   * Get User image profile [For admin or current logged only].
   *
   * fetch a user's image profile using the image complete name
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUrlImageUser$Png$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUrlImageUser$Png(params: GetUrlImageUser$Png$Params, context?: HttpContext): Observable<Array<string>> {
    return this.getUrlImageUser$Png$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<string>>): Array<string> => r.body)
    );
  }

  /**
   * Get User image profile [For admin or current logged only].
   *
   * fetch a user's image profile using the image complete name
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUrlImageUser$Jpeg()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUrlImageUser$Jpeg$Response(params: GetUrlImageUser$Jpeg$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<string>>> {
    return getUrlImageUser$Jpeg(this.http, this.rootUrl, params, context);
  }

  /**
   * Get User image profile [For admin or current logged only].
   *
   * fetch a user's image profile using the image complete name
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUrlImageUser$Jpeg$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUrlImageUser$Jpeg(params: GetUrlImageUser$Jpeg$Params, context?: HttpContext): Observable<Array<string>> {
    return this.getUrlImageUser$Jpeg$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<string>>): Array<string> => r.body)
    );
  }

  /** Path part for operation `getUrlImageBook()` */
  static readonly GetUrlImageBookPath = '/ibp/v1/images/book/{imageName}';

  /**
   * Get Book image cover.
   *
   * fetch a book's image cover using the image complete name
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUrlImageBook$Png()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUrlImageBook$Png$Response(params: GetUrlImageBook$Png$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<string>>> {
    return getUrlImageBook$Png(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Book image cover.
   *
   * fetch a book's image cover using the image complete name
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUrlImageBook$Png$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUrlImageBook$Png(params: GetUrlImageBook$Png$Params, context?: HttpContext): Observable<Array<string>> {
    return this.getUrlImageBook$Png$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<string>>): Array<string> => r.body)
    );
  }

  /**
   * Get Book image cover.
   *
   * fetch a book's image cover using the image complete name
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUrlImageBook$Jpeg()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUrlImageBook$Jpeg$Response(params: GetUrlImageBook$Jpeg$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<string>>> {
    return getUrlImageBook$Jpeg(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Book image cover.
   *
   * fetch a book's image cover using the image complete name
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUrlImageBook$Jpeg$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUrlImageBook$Jpeg(params: GetUrlImageBook$Jpeg$Params, context?: HttpContext): Observable<Array<string>> {
    return this.getUrlImageBook$Jpeg$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<string>>): Array<string> => r.body)
    );
  }

}
