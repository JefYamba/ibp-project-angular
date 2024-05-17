/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageMessageResponse } from '../../models/page-message-response';

export interface GetAllMessagesForSender$Params {
  sender_id: number;
  page?: number;
  size?: number;
}

export function getAllMessagesForSender(http: HttpClient, rootUrl: string, params: GetAllMessagesForSender$Params, context?: HttpContext): Observable<StrictHttpResponse<PageMessageResponse>> {
  const rb = new RequestBuilder(rootUrl, getAllMessagesForSender.PATH, 'get');
  if (params) {
    rb.path('sender_id', params.sender_id, {});
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageMessageResponse>;
    })
  );
}

getAllMessagesForSender.PATH = '/ibp/v1/messages/sender/{sender_id}';
