/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AppUserRequestDto } from '../../models/app-user-request-dto';
import { ResponseDto } from '../../models/response-dto';

export interface Update$Params {
      body: AppUserRequestDto
}

export function update(http: HttpClient, rootUrl: string, params: Update$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseDto>> {
  const rb = new RequestBuilder(rootUrl, update.PATH, 'put');
  if (params) {
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

update.PATH = '/ibp/v1/users';
