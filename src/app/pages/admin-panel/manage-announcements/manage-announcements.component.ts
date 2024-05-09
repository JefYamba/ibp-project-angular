import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-manage-announcements',
  standalone: true,
    imports: [
        NgForOf,
        RouterLink,
        NgOptimizedImage
    ],
  templateUrl: './manage-announcements.component.html',
  styleUrl: './manage-announcements.component.css'
})
export class ManageAnnouncementsComponent {

}
