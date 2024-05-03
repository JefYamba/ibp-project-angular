import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AppConfig} from "../core/config/AppConfig";
import {UserAvatarComponent} from "../shared/user-avatar/user-avatar.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-user-panel',
  standalone: true,
    imports: [
        RouterOutlet,
        RouterLink,
        UserAvatarComponent,
        NgOptimizedImage
    ],
  templateUrl: './user-panel.component.html',
  styleUrl: './user-panel.component.css'
})
export class UserPanelComponent {

    protected readonly AppConfig = AppConfig;
}
