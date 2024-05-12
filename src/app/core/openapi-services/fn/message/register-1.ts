/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MessageRequest } from '../../models/message-request';
import { MessageResponse } from '../../models/message-response';

export interface Register1$Params {
      body: MessageRequest
}

export function register1(http: HttpClient, rootUrl: string, params: Register1$Params, context?: HttpContext): Observable<StrictHttpResponse<MessageResponse>> {
  const rb = new RequestBuilder(rootUrl, register1.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<MessageResponse>;
    })
  );
}

register1.PATH = '/ibp/v1/messages';