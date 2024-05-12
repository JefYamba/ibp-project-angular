/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageBookResponse } from '../../models/page-book-response';

export interface GetAllLatestBooks$Params {
  page?: number;
  size?: number;
}

export function getAllLatestBooks(http: HttpClient, rootUrl: string, params?: GetAllLatestBooks$Params, context?: HttpContext): Observable<StrictHttpResponse<PageBookResponse>> {
  const rb = new RequestBuilder(rootUrl, getAllLatestBooks.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageBookResponse>;
    })
  );
}

getAllLatestBooks.PATH = '/ibp/v1/books/latest';
