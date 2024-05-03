import {Component, HostListener, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {AppConfig} from "../core/config/AppConfig";
import {UserAvatarComponent} from "../shared/user-avatar/user-avatar.component";

@Component({
  selector: 'app-admin-panel',
  standalone: true,
    imports: [
        RouterOutlet,
        NgClass,
        NgOptimizedImage,
        RouterLink,
        UserAvatarComponent,
    ],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent implements OnInit{
    isToggled!: boolean;



    ngOnInit(): void {
        this.isToggled = window.innerWidth  < 768;
    }

    constructor() { }

    @HostListener('window:resize', ['$event'])
    onResize(event: { target: { innerWidth: number; }; }) {
        this.isToggled = event.target.innerWidth < 768;
    }

    toggleSidebar() {
        this.isToggled = !this.isToggled;
    }

    protected readonly AppConfig = AppConfig;
}
