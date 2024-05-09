/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ResponseDto } from '../../models/response-dto';

export interface GetAllBooks$Params {
  searchKey?: string;
  page?: number;
  size?: number;
}

export function getAllBooks(http: HttpClient, rootUrl: string, params?: GetAllBooks$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseDto>> {
  const rb = new RequestBuilder(rootUrl, getAllBooks.PATH, 'get');
  if (params) {
    rb.query('searchKey', params.searchKey, {});
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ResponseDto>;
    })
  );
}

getAllBooks.PATH = '/ibp/v1/books';