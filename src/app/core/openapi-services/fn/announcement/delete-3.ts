/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ConfirmationResponse } from '../../models/confirmation-response';

export interface Delete3$Params {
  announcement_id: number;
}

export function delete3(http: HttpClient, rootUrl: string, params: Delete3$Params, context?: HttpContext): Observable<StrictHttpResponse<ConfirmationResponse>> {
  const rb = new RequestBuilder(rootUrl, delete3.PATH, 'delete');
  if (params) {
    rb.path('announcement_id', params.announcement_id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ConfirmationResponse>;
    })
  );
}

delete3.PATH = '/ibp/v1/announcements/{announcement_id}';
