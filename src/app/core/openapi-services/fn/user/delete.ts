/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ConfirmationResponse } from '../../models/confirmation-response';

export interface Delete$Params {
  user_id: number;
}

export function delete$(http: HttpClient, rootUrl: string, params: Delete$Params, context?: HttpContext): Observable<StrictHttpResponse<ConfirmationResponse>> {
  const rb = new RequestBuilder(rootUrl, delete$.PATH, 'delete');
  if (params) {
    rb.path('user_id', params.user_id, {});
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

delete$.PATH = '/ibp/v1/users/{user_id}';
