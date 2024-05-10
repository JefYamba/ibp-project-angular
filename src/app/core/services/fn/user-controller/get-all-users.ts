/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageUserResponse } from '../../models/page-user-response';

export interface GetAllUsers$Params {
  q?: string;
  page?: number;
  size?: number;
}

export function getAllUsers(http: HttpClient, rootUrl: string, params?: GetAllUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<PageUserResponse>> {
  const rb = new RequestBuilder(rootUrl, getAllUsers.PATH, 'get');
  if (params) {
    rb.query('q', params.q, {});
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageUserResponse>;
    })
  );
}

getAllUsers.PATH = '/ibp/v1/users';
