/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ConfirmationResponse } from '../../models/confirmation-response';

export interface SetImageCover$Params {
  book_id: number;
      body?: {
'image': Blob;
}
}

export function setImageCover(http: HttpClient, rootUrl: string, params: SetImageCover$Params, context?: HttpContext): Observable<StrictHttpResponse<ConfirmationResponse>> {
  const rb = new RequestBuilder(rootUrl, setImageCover.PATH, 'post');
  if (params) {
    rb.path('book_id', params.book_id, {});
    rb.body(params.body, 'multipart/form-data');
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

setImageCover.PATH = '/ibp/v1/books/{book_id}';
