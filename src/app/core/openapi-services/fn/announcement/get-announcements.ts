/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageAnnouncementResponse } from '../../models/page-announcement-response';

export interface GetAnnouncements$Params {
  page?: number;
  size?: number;
}

export function getAnnouncements(http: HttpClient, rootUrl: string, params?: GetAnnouncements$Params, context?: HttpContext): Observable<StrictHttpResponse<PageAnnouncementResponse>> {
  const rb = new RequestBuilder(rootUrl, getAnnouncements.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageAnnouncementResponse>;
    })
  );
}

getAnnouncements.PATH = '/ibp/v1/announcements';
