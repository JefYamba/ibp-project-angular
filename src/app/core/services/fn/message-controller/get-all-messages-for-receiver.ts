/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ResponseDto } from '../../models/response-dto';

export interface GetAllMessagesForReceiver$Params {
  receiver_id: number;
  page?: number;
  size?: number;
}

export function getAllMessagesForReceiver(http: HttpClient, rootUrl: string, params: GetAllMessagesForReceiver$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseDto>> {
  const rb = new RequestBuilder(rootUrl, getAllMessagesForReceiver.PATH, 'get');
  if (params) {
    rb.path('receiver_id', params.receiver_id, {});
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

getAllMessagesForReceiver.PATH = '/ibp/v1/messages/receiver/{receiver_id}';
