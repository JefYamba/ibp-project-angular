import { Component } from '@angular/core';
import {AppConfig} from "../../core/config/AppConfig";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-admin-nav',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './admin-nav.component.html',
  styleUrl: './admin-nav.component.css'
})
export class AdminNavComponent {

    protected readonly AppConfig = AppConfig;
}
