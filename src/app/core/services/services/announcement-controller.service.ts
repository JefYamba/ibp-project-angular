/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete3 } from '../fn/announcement-controller/delete-3';
import { Delete3$Params } from '../fn/announcement-controller/delete-3';
import { get3 } from '../fn/announcement-controller/get-3';
import { Get3$Params } from '../fn/announcement-controller/get-3';
import { getAnnouncements } from '../fn/announcement-controller/get-announcements';
import { GetAnnouncements$Params } from '../fn/announcement-controller/get-announcements';
import { register3 } from '../fn/announcement-controller/register-3';
import { Register3$Params } from '../fn/announcement-controller/register-3';
import { ResponseDto } from '../models/response-dto';
import { update3 } from '../fn/announcement-controller/update-3';
import { Update3$Params } from '../fn/announcement-controller/update-3';

@Injectable({ providedIn: 'root' })
export class AnnouncementControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAnnouncements()` */
  static readonly GetAnnouncementsPath = '/ibp/v1/announcements';

  /**
   * Get all the announcements.
   *
   * Fetch a page of announcements
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAnnouncements()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAnnouncements$Response(params?: GetAnnouncements$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseDto>> {
    return getAnnouncements(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all the announcements.
   *
   * Fetch a page of announcements
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAnnouncements$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAnnouncements(params?: GetAnnouncements$Params, context?: HttpContext): Observable<ResponseDto> {
    return this.getAnnouncements$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseDto>): ResponseDto => r.body)
    );
  }

  /** Path part for operation `update3()` */
  static readonly Update3Path = '/ibp/v1/announcements';

  /**
   * Update an announcement  [For admin only].
   *
   * modifies an existing announcement
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update3()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update3$Response(params: Update3$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseDto>> {
    return update3(this.http, this.rootUrl, params, context);
  }

  /**
   * Update an announcement  [For admin only].
   *
   * modifies an existing announcement
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `update3$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update3(params: Update3$Params, context?: HttpContext): Observable<ResponseDto> {
    return this.update3$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseDto>): ResponseDto => r.body)
    );
  }

  /** Path part for operation `register3()` */
  static readonly Register3Path = '/ibp/v1/announcements';

  /**
   * Make an announcement  [For admin only].
   *
   * register an announcement
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `register3()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register3$Response(params: Register3$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseDto>> {
    return register3(this.http, this.rootUrl, params, context);
  }

  /**
   * Make an announcement  [For admin only].
   *
   * register an announcement
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `register3$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register3(params: Register3$Params, context?: HttpContext): Observable<ResponseDto> {
    return this.register3$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseDto>): ResponseDto => r.body)
    );
  }

  /** Path part for operation `get3()` */
  static readonly Get3Path = '/ibp/v1/announcements/{announcement_id}';

  /**
   * Get announcement by Id.
   *
   * fetch a announcement using the id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `get3()` instead.
   *
   * This method doesn't expect any request body.
   */
  get3$Response(params: Get3$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseDto>> {
    return get3(this.http, this.rootUrl, params, context);
  }

  /**
   * Get announcement by Id.
   *
   * fetch a announcement using the id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `get3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  get3(params: Get3$Params, context?: HttpContext): Observable<ResponseDto> {
    return this.get3$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseDto>): ResponseDto => r.body)
    );
  }

  /** Path part for operation `delete3()` */
  static readonly Delete3Path = '/ibp/v1/announcements/{announcement_id}';

  /**
   * Delete an announcement  [For admin only].
   *
   * Delete an existing announcement
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete3()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete3$Response(params: Delete3$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseDto>> {
    return delete3(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete an announcement  [For admin only].
   *
   * Delete an existing announcement
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete3(params: Delete3$Params, context?: HttpContext): Observable<ResponseDto> {
    return this.delete3$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseDto>): ResponseDto => r.body)
    );
  }

}
