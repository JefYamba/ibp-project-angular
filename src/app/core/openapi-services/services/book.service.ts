/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { BookResponse } from '../models/book-response';
import { ConfirmationResponse } from '../models/confirmation-response';
import { delete2 } from '../fn/book/delete-2';
import { Delete2$Params } from '../fn/book/delete-2';
import { get2 } from '../fn/book/get-2';
import { Get2$Params } from '../fn/book/get-2';
import { getAllBooks } from '../fn/book/get-all-books';
import { GetAllBooks$Params } from '../fn/book/get-all-books';
import { getAllLatestBooks } from '../fn/book/get-all-latest-books';
import { GetAllLatestBooks$Params } from '../fn/book/get-all-latest-books';
import { PageBookResponse } from '../models/page-book-response';
import { register2 } from '../fn/book/register-2';
import { Register2$Params } from '../fn/book/register-2';
import { setImageCover } from '../fn/book/set-image-cover';
import { SetImageCover$Params } from '../fn/book/set-image-cover';
import { update2 } from '../fn/book/update-2';
import { Update2$Params } from '../fn/book/update-2';

@Injectable({ providedIn: 'root' })
export class BookService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllBooks()` */
  static readonly GetAllBooksPath = '/ibp/v1/books';

  /**
   * Get all the books.
   *
   * Fetch a page of books
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllBooks()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllBooks$Response(params?: GetAllBooks$Params, context?: HttpContext): Observable<StrictHttpResponse<PageBookResponse>> {
    return getAllBooks(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all the books.
   *
   * Fetch a page of books
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllBooks$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllBooks(params?: GetAllBooks$Params, context?: HttpContext): Observable<PageBookResponse> {
    return this.getAllBooks$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageBookResponse>): PageBookResponse => r.body)
    );
  }

  /** Path part for operation `update2()` */
  static readonly Update2Path = '/ibp/v1/books';

  /**
   * Update a book  [For admin only].
   *
   * modifies an existing book
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update2$Response(params: Update2$Params, context?: HttpContext): Observable<StrictHttpResponse<BookResponse>> {
    return update2(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a book  [For admin only].
   *
   * modifies an existing book
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `update2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update2(params: Update2$Params, context?: HttpContext): Observable<BookResponse> {
    return this.update2$Response(params, context).pipe(
      map((r: StrictHttpResponse<BookResponse>): BookResponse => r.body)
    );
  }

  /** Path part for operation `register2()` */
  static readonly Register2Path = '/ibp/v1/books';

  /**
   * Add a book.
   *
   * register a new book  [For admin only]
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `register2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register2$Response(params: Register2$Params, context?: HttpContext): Observable<StrictHttpResponse<BookResponse>> {
    return register2(this.http, this.rootUrl, params, context);
  }

  /**
   * Add a book.
   *
   * register a new book  [For admin only]
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `register2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register2(params: Register2$Params, context?: HttpContext): Observable<BookResponse> {
    return this.register2$Response(params, context).pipe(
      map((r: StrictHttpResponse<BookResponse>): BookResponse => r.body)
    );
  }

  /** Path part for operation `get2()` */
  static readonly Get2Path = '/ibp/v1/books/{book_id}';

  /**
   * Get book by Id.
   *
   * fetch a book using the id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `get2()` instead.
   *
   * This method doesn't expect any request body.
   */
  get2$Response(params: Get2$Params, context?: HttpContext): Observable<StrictHttpResponse<BookResponse>> {
    return get2(this.http, this.rootUrl, params, context);
  }

  /**
   * Get book by Id.
   *
   * fetch a book using the id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `get2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  get2(params: Get2$Params, context?: HttpContext): Observable<BookResponse> {
    return this.get2$Response(params, context).pipe(
      map((r: StrictHttpResponse<BookResponse>): BookResponse => r.body)
    );
  }

  /** Path part for operation `setImageCover()` */
  static readonly SetImageCoverPath = '/ibp/v1/books/{book_id}';

  /**
   * Register book image cover  [For admin only].
   *
   * set an image cover for an existing book
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `setImageCover()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  setImageCover$Response(params: SetImageCover$Params, context?: HttpContext): Observable<StrictHttpResponse<ConfirmationResponse>> {
    return setImageCover(this.http, this.rootUrl, params, context);
  }

  /**
   * Register book image cover  [For admin only].
   *
   * set an image cover for an existing book
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `setImageCover$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  setImageCover(params: SetImageCover$Params, context?: HttpContext): Observable<ConfirmationResponse> {
    return this.setImageCover$Response(params, context).pipe(
      map((r: StrictHttpResponse<ConfirmationResponse>): ConfirmationResponse => r.body)
    );
  }

  /** Path part for operation `delete2()` */
  static readonly Delete2Path = '/ibp/v1/books/{book_id}';

  /**
   * Delete a book [For admin only].
   *
   * Delete an existing book
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete2()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete2$Response(params: Delete2$Params, context?: HttpContext): Observable<StrictHttpResponse<ConfirmationResponse>> {
    return delete2(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a book [For admin only].
   *
   * Delete an existing book
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete2(params: Delete2$Params, context?: HttpContext): Observable<ConfirmationResponse> {
    return this.delete2$Response(params, context).pipe(
      map((r: StrictHttpResponse<ConfirmationResponse>): ConfirmationResponse => r.body)
    );
  }

  /** Path part for operation `getAllLatestBooks()` */
  static readonly GetAllLatestBooksPath = '/ibp/v1/books/latest';

  /**
   * Get all the books ordered by the latest.
   *
   * Fetch a page of books ordered by the latest
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllLatestBooks()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllLatestBooks$Response(params?: GetAllLatestBooks$Params, context?: HttpContext): Observable<StrictHttpResponse<PageBookResponse>> {
    return getAllLatestBooks(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all the books ordered by the latest.
   *
   * Fetch a page of books ordered by the latest
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllLatestBooks$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllLatestBooks(params?: GetAllLatestBooks$Params, context?: HttpContext): Observable<PageBookResponse> {
    return this.getAllLatestBooks$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageBookResponse>): PageBookResponse => r.body)
    );
  }

}
