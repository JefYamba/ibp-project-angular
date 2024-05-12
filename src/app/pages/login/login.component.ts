import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { AppConfig } from '../../core/config/AppConfig';
import {AuthentificationRequest} from "../../core/openapi-services/models/authentification-request";
import {NgForOf, NgIf} from "@angular/common";
import {HttpClient, HttpClientModule, HttpErrorResponse} from "@angular/common/http";
import {AuthentificationService} from "../../core/openapi-services/services/authentification.service";
import {TokenService} from "../../core/services/token/token.service";
import {LoggedUserService} from "../../core/services/logged-user.service";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        RouterLink,
        FormsModule,
        NgIf,
        NgForOf,
        HttpClientModule,
    ],
    providers:[
        AuthentificationService,
        HttpClient
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    protected readonly AppConfig = AppConfig;

    authRequest: AuthentificationRequest = {username: '', password: ''}
    errorMsg: Array<string> = [];

    constructor(
        private router:Router,
        private tokenService:TokenService,
        private authentificationService: AuthentificationService,
        private loggedUserService: LoggedUserService,
    ) {
    }

    login() {
        this.errorMsg = [];
        this.authentificationService.login({body: this.authRequest}).subscribe({
            next: result => {
                this.tokenService.token = result.token as string;

                this.loggedUserService.getLoggedUser().subscribe(
                    loggedUser => {
                        if (loggedUser.role === "ADMIN") {
                            this.router.navigate(['/admin']).then(r => window.location.reload());
                        } else {
                            this.router.navigate(['/home']).then(r => window.location.reload());
                        }
                    }
                )
            },
            error: err  => {
                if (err.error.formErrors){
                    this.errorMsg = err.error.formErrors;
                } else {
                    this.errorMsg.push(err.error.error)
                }
            }
        })
    }

}

