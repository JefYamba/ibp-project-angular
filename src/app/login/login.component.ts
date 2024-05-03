import { Component } from '@angular/core';
import {AppConfig} from "../core/config/AppConfig";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    protected readonly AppConfig = AppConfig;
}
