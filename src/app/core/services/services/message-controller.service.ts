/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete1 } from '../fn/message-controller/delete-1';
import { Delete1$Params } from '../fn/message-controller/delete-1';
import { get1 } from '../fn/message-controller/get-1';
import { Get1$Params } from '../fn/message-controller/get-1';
import { getAllMessages } from '../fn/message-controller/get-all-messages';
import { GetAllMessages$Params } from '../fn/message-controller/get-all-messages';
import { getAllMessagesForAdmins } from '../fn/message-controller/get-all-messages-for-admins';
import { GetAllMessagesForAdmins$Params } from '../fn/message-controller/get-all-messages-for-admins';
import { getAllMessagesForReceiver } from '../fn/message-controller/get-all-messages-for-receiver';
import { GetAllMessagesForReceiver$Params } from '../fn/message-controller/get-all-messages-for-receiver';
import { getAllMessagesForSender } from '../fn/message-controller/get-all-messages-for-sender';
import { GetAllMessagesForSender$Params } from '../fn/message-controller/get-all-messages-for-sender';
import { register1 } from '../fn/message-controller/register-1';
import { Register1$Params } from '../fn/message-controller/register-1';
import { ResponseDto } from '../models/response-dto';
import { update1 } from '../fn/message-controller/update-1';
import { Update1$Params } from '../fn/message-controller/update-1';

@Injectable({ providedIn: 'root' })
export class MessageControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllMessages()` */
  static readonly GetAllMessagesPath = '/ibp/v1/messages';

  /**
   * Get all the messages [For admin only].
   *
   * Fetch a page of messages
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllMessages()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllMessages$Response(params?: GetAllMessages$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseDto>> {
    return getAllMessages(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all the messages [For admin only].
   *
   * Fetch a page of messages
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllMessages$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllMessages(params?: GetAllMessages$Params, context?: HttpContext): Observable<ResponseDto> {
    return this.getAllMessages$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseDto>): ResponseDto => r.body)
    );
  }

  /** Path part for operation `update1()` */
  static readonly Update1Path = '/ibp/v1/messages';

  /**
   * Update a message [For current logged user as sender only].
   *
   * modifies an existing message
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update1$Response(params: Update1$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseDto>> {
    return update1(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a message [For current logged user as sender only].
   *
   * modifies an existing message
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `update1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update1(params: Update1$Params, context?: HttpContext): Observable<ResponseDto> {
    return this.update1$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseDto>): ResponseDto => r.body)
    );
  }

  /** Path part for operation `register1()` */
  static readonly Register1Path = '/ibp/v1/messages';

  /**
   * Send a message [For current logged user as sender only].
   *
   * send a new message
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `register1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register1$Response(params: Register1$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseDto>> {
    return register1(this.http, this.rootUrl, params, context);
  }

  /**
   * Send a message [For current logged user as sender only].
   *
   * send a new message
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `register1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register1(params: Register1$Params, context?: HttpContext): Observable<ResponseDto> {
    return this.register1$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseDto>): ResponseDto => r.body)
    );
  }

  /** Path part for operation `get1()` */
  static readonly Get1Path = '/ibp/v1/messages/{message_id}';

  /**
   * Get message by Id [For admin or current logged user as sender/receiver only].
   *
   * fetch a message using the id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `get1()` instead.
   *
   * This method doesn't expect any request body.
   */
  get1$Response(params: Get1$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseDto>> {
    return get1(this.http, this.rootUrl, params, context);
  }

  /**
   * Get message by Id [For admin or current logged user as sender/receiver only].
   *
   * fetch a message using the id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `get1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  get1(params: Get1$Params, context?: HttpContext): Observable<ResponseDto> {
    return this.get1$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseDto>): ResponseDto => r.body)
    );
  }

  /** Path part for operation `delete1()` */
  static readonly Delete1Path = '/ibp/v1/messages/{message_id}';

  /**
   * Delete a message [For admin only].
   *
   * Delete an existing message
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1$Response(params: Delete1$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseDto>> {
    return delete1(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a message [For admin only].
   *
   * Delete an existing message
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1(params: Delete1$Params, context?: HttpContext): Observable<ResponseDto> {
    return this.delete1$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseDto>): ResponseDto => r.body)
    );
  }

  /** Path part for operation `getAllMessagesForSender()` */
  static readonly GetAllMessagesForSenderPath = '/ibp/v1/messages/sender/{sender_id}';

  /**
   * Get messages by sender  [For admin or current logged user as sender only].
   *
   * Fetch a page of messages by sender using sender id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllMessagesForSender()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllMessagesForSender$Response(params: GetAllMessagesForSender$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseDto>> {
    return getAllMessagesForSender(this.http, this.rootUrl, params, context);
  }

  /**
   * Get messages by sender  [For admin or current logged user as sender only].
   *
   * Fetch a page of messages by sender using sender id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllMessagesForSender$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllMessagesForSender(params: GetAllMessagesForSender$Params, context?: HttpContext): Observable<ResponseDto> {
    return this.getAllMessagesForSender$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseDto>): ResponseDto => r.body)
    );
  }

  /** Path part for operation `getAllMessagesForReceiver()` */
  static readonly GetAllMessagesForReceiverPath = '/ibp/v1/messages/receiver/{receiver_id}';

  /**
   * Get messages by receiver [For admin or current logged user as receiver only].
   *
   * Fetch a page of messages by receiver using receiver id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllMessagesForReceiver()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllMessagesForReceiver$Response(params: GetAllMessagesForReceiver$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseDto>> {
    return getAllMessagesForReceiver(this.http, this.rootUrl, params, context);
  }

  /**
   * Get messages by receiver [For admin or current logged user as receiver only].
   *
   * Fetch a page of messages by receiver using receiver id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllMessagesForReceiver$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllMessagesForReceiver(params: GetAllMessagesForReceiver$Params, context?: HttpContext): Observable<ResponseDto> {
    return this.getAllMessagesForReceiver$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseDto>): ResponseDto => r.body)
    );
  }

  /** Path part for operation `getAllMessagesForAdmins()` */
  static readonly GetAllMessagesForAdminsPath = '/ibp/v1/messages/admins';

  /**
   * Get all the admin messages [For admin only].
   *
   * Fetch a page of messages for admins
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllMessagesForAdmins()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllMessagesForAdmins$Response(params?: GetAllMessagesForAdmins$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseDto>> {
    return getAllMessagesForAdmins(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all the admin messages [For admin only].
   *
   * Fetch a page of messages for admins
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllMessagesForAdmins$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllMessagesForAdmins(params?: GetAllMessagesForAdmins$Params, context?: HttpContext): Observable<ResponseDto> {
    return this.getAllMessagesForAdmins$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseDto>): ResponseDto => r.body)
    );
  }

}
