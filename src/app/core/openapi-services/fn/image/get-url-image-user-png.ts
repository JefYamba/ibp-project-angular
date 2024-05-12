/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface GetUrlImageUser$Png$Params {
  imageName: string;
}

export function getUrlImageUser$Png(http: HttpClient, rootUrl: string, params: GetUrlImageUser$Png$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<string>>> {
  const rb = new RequestBuilder(rootUrl, getUrlImageUser$Png.PATH, 'get');
  if (params) {
    rb.path('imageName', params.imageName, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: 'image/png', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<string>>;
    })
  );
}

getUrlImageUser$Png.PATH = '/ibp/v1/images/user/{imageName}';
