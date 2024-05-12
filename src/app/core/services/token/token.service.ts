import { Injectable } from '@angular/core';
import {UserResponse} from "../../openapi-services/models/user-response";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

    set token(token: string) {
      localStorage.setItem('token', token);
    }

    get token() {
      return localStorage.getItem('token') as string;
    }
}
