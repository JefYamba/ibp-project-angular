/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { changePassword } from '../fn/user-controller/change-password';
import { ChangePassword$Params } from '../fn/user-controller/change-password';
import { changeRole } from '../fn/user-controller/change-role';
import { ChangeRole$Params } from '../fn/user-controller/change-role';
import { delete$ } from '../fn/user-controller/delete';
import { Delete$Params } from '../fn/user-controller/delete';
import { get } from '../fn/user-controller/get';
import { Get$Params } from '../fn/user-controller/get';
import { getAllUsers } from '../fn/user-controller/get-all-users';
import { GetAllUsers$Params } from '../fn/user-controller/get-all-users';
import { PageUserResponse } from '../models/page-user-response';
import { register } from '../fn/user-controller/register';
import { Register$Params } from '../fn/user-controller/register';
import { setImageProfile } from '../fn/user-controller/set-image-profile';
import { SetImageProfile$Params } from '../fn/user-controller/set-image-profile';
import { update } from '../fn/user-controller/update';
import { Update$Params } from '../fn/user-controller/update';
import { UserResponse } from '../models/user-response';

@Injectable({ providedIn: 'root' })
export class UserControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllUsers()` */
  static readonly GetAllUsersPath = '/ibp/v1/users';

  /**
   * Get all the users [For admin only].
   *
   * Fetch a page of users
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllUsers$Response(params?: GetAllUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<PageUserResponse>> {
    return getAllUsers(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all the users [For admin only].
   *
   * Fetch a page of users
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllUsers(params?: GetAllUsers$Params, context?: HttpContext): Observable<PageUserResponse> {
    return this.getAllUsers$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageUserResponse>): PageUserResponse => r.body)
    );
  }

  /** Path part for operation `update()` */
  static readonly UpdatePath = '/ibp/v1/users';

  /**
   * Update a user [For admin or current logged user only].
   *
   * modifies an existing user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update$Response(params: Update$Params, context?: HttpContext): Observable<StrictHttpResponse<UserResponse>> {
    return update(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a user [For admin or current logged user only].
   *
   * modifies an existing user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `update$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update(params: Update$Params, context?: HttpContext): Observable<UserResponse> {
    return this.update$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserResponse>): UserResponse => r.body)
    );
  }

  /** Path part for operation `register()` */
  static readonly RegisterPath = '/ibp/v1/users';

  /**
   * Add a user [For admin only].
   *
   * register a new user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `register()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register$Response(params: Register$Params, context?: HttpContext): Observable<StrictHttpResponse<UserResponse>> {
    return register(this.http, this.rootUrl, params, context);
  }

  /**
   * Add a user [For admin only].
   *
   * register a new user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `register$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register(params: Register$Params, context?: HttpContext): Observable<UserResponse> {
    return this.register$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserResponse>): UserResponse => r.body)
    );
  }

  /** Path part for operation `changeRole()` */
  static readonly ChangeRolePath = '/ibp/v1/users/{user_id}/update_role';

  /**
   * Change user's role [For admin only].
   *
   * Change user's role
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changeRole()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changeRole$Response(params: ChangeRole$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return changeRole(this.http, this.rootUrl, params, context);
  }

  /**
   * Change user's role [For admin only].
   *
   * Change user's role
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changeRole$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changeRole(params: ChangeRole$Params, context?: HttpContext): Observable<string> {
    return this.changeRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `changePassword()` */
  static readonly ChangePasswordPath = '/ibp/v1/users/{user_id}/update_password';

  /**
   * Change user's password [For current logged user only].
   *
   * Change user's password
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changePassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePassword$Response(params: ChangePassword$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return changePassword(this.http, this.rootUrl, params, context);
  }

  /**
   * Change user's password [For current logged user only].
   *
   * Change user's password
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changePassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePassword(params: ChangePassword$Params, context?: HttpContext): Observable<string> {
    return this.changePassword$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `get()` */
  static readonly GetPath = '/ibp/v1/users/{user_id}';

  /**
   * Get user by Id [For admin or current logged user only].
   *
   * fetch a user using the id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `get()` instead.
   *
   * This method doesn't expect any request body.
   */
  get$Response(params: Get$Params, context?: HttpContext): Observable<StrictHttpResponse<UserResponse>> {
    return get(this.http, this.rootUrl, params, context);
  }

  /**
   * Get user by Id [For admin or current logged user only].
   *
   * fetch a user using the id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `get$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  get(params: Get$Params, context?: HttpContext): Observable<UserResponse> {
    return this.get$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserResponse>): UserResponse => r.body)
    );
  }

  /** Path part for operation `setImageProfile()` */
  static readonly SetImageProfilePath = '/ibp/v1/users/{user_id}';

  /**
   * Register user image profile [For admin or current logged user only].
   *
   * set an image profile for an existing user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `setImageProfile()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  setImageProfile$Response(params: SetImageProfile$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return setImageProfile(this.http, this.rootUrl, params, context);
  }

  /**
   * Register user image profile [For admin or current logged user only].
   *
   * set an image profile for an existing user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `setImageProfile$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  setImageProfile(params: SetImageProfile$Params, context?: HttpContext): Observable<string> {
    return this.setImageProfile$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `delete()` */
  static readonly DeletePath = '/ibp/v1/users/{user_id}';

  /**
   * Delete a user [For admin only].
   *
   * Delete an existing user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete$Response(params: Delete$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return delete$(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a user [For admin only].
   *
   * Delete an existing user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete(params: Delete$Params, context?: HttpContext): Observable<string> {
    return this.delete$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
