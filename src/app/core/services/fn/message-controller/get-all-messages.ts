/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageMessageResponse } from '../../models/page-message-response';

export interface GetAllMessages$Params {
  page?: number;
  size?: number;
}

export function getAllMessages(http: HttpClient, rootUrl: string, params?: GetAllMessages$Params, context?: HttpContext): Observable<StrictHttpResponse<PageMessageResponse>> {
  const rb = new RequestBuilder(rootUrl, getAllMessages.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageMessageResponse>;
    })
  );
}

getAllMessages.PATH = '/ibp/v1/messages';
