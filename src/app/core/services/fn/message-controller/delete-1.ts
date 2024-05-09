/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ResponseDto } from '../../models/response-dto';

export interface Delete1$Params {
  message_id: number;
}

export function delete1(http: HttpClient, rootUrl: string, params: Delete1$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseDto>> {
  const rb = new RequestBuilder(rootUrl, delete1.PATH, 'delete');
  if (params) {
    rb.path('message_id', params.message_id, {});
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

delete1.PATH = '/ibp/v1/messages/{message_id}';
