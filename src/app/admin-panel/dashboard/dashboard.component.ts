import { Component } from '@angular/core';
import {AnnouncementCardComponent} from "../../shared/announcement-card/announcement-card.component";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  standalone: true,
    imports: [
        AnnouncementCardComponent,
        NgForOf,
        NgOptimizedImage,
        RouterLink
    ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
