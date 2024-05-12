/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AnnouncementRequest } from '../../models/announcement-request';
import { AnnouncementResponse } from '../../models/announcement-response';

export interface Register3$Params {
      body: AnnouncementRequest
}

export function register3(http: HttpClient, rootUrl: string, params: Register3$Params, context?: HttpContext): Observable<StrictHttpResponse<AnnouncementResponse>> {
  const rb = new RequestBuilder(rootUrl, register3.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AnnouncementResponse>;
    })
  );
}

register3.PATH = '/ibp/v1/announcements';
