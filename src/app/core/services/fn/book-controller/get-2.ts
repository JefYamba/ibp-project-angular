/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ResponseDto } from '../../models/response-dto';

export interface Get2$Params {
  book_id: number;
}

export function get2(http: HttpClient, rootUrl: string, params: Get2$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseDto>> {
  const rb = new RequestBuilder(rootUrl, get2.PATH, 'get');
  if (params) {
    rb.path('book_id', params.book_id, {});
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

get2.PATH = '/ibp/v1/books/{book_id}';
