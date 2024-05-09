/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ResponseDto } from '../../models/response-dto';

export interface SetImageProfile$Params {
  user_id: number;
      body?: {
'image': Blob;
}
}

export function setImageProfile(http: HttpClient, rootUrl: string, params: SetImageProfile$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseDto>> {
  const rb = new RequestBuilder(rootUrl, setImageProfile.PATH, 'post');
  if (params) {
    rb.path('user_id', params.user_id, {});
    rb.body(params.body, 'application/json');
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

setImageProfile.PATH = '/ibp/v1/users/{user_id}';
