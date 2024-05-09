import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { AppConfig } from '../../core/config/AppConfig';
import {LoginRequest} from "../../core/services/models/login-request";
import {TokenService} from "../../core/services/token/token.service";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        RouterLink,
        FormsModule
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    protected readonly AppConfig = AppConfig;

    authRequest: LoginRequest = {username: '', password: ''}

    constructor(private router:Router, private tokenService: TokenService) {
    }

    login() {

    }
}
