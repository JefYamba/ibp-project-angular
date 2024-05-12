/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageMessageResponse } from '../../models/page-message-response';

export interface GetAllMessagesForAdmins$Params {
  page?: number;
  size?: number;
}

export function getAllMessagesForAdmins(http: HttpClient, rootUrl: string, params?: GetAllMessagesForAdmins$Params, context?: HttpContext): Observable<StrictHttpResponse<PageMessageResponse>> {
  const rb = new RequestBuilder(rootUrl, getAllMessagesForAdmins.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageMessageResponse>;
    })
  );
}

getAllMessagesForAdmins.PATH = '/ibp/v1/messages/admins';
