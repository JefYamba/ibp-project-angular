import {Injectable} from '@angular/core';
import {TokenService} from "./token/token.service";
import {UserService} from "../openapi-services/services/user.service";
import {UserResponse} from "../openapi-services/models/user-response";
import {Observable} from "rxjs";
import {LoggedUserModel} from "../models/logged-user.model";

@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {

  constructor(
      private tokenService:TokenService,
      private userService: UserService
  ) { }

    getLoggedUser() : Observable<UserResponse> {
      if (this.tokenService.token) {
          let id = JSON.parse(atob(this.tokenService.token.split('.')[1])).id;
          return this.userService.get({user_id: id});
      }
      return new Observable(() => {})
    }

    getUser() : LoggedUserModel {
        if (this.tokenService.token) {
            return JSON.parse(atob(this.tokenService.token.split('.')[1])) as LoggedUserModel;
        }
        return {};
    }
}
