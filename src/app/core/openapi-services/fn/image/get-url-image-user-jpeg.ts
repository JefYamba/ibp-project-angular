/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface GetUrlImageUser$Jpeg$Params {
  imageName: string;
}

export function getUrlImageUser$Jpeg(http: HttpClient, rootUrl: string, params: GetUrlImageUser$Jpeg$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<string>>> {
  const rb = new RequestBuilder(rootUrl, getUrlImageUser$Jpeg.PATH, 'get');
  if (params) {
    rb.path('imageName', params.imageName, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: 'image/jpeg', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<string>>;
    })
  );
}

getUrlImageUser$Jpeg.PATH = '/ibp/v1/images/user/{imageName}';
