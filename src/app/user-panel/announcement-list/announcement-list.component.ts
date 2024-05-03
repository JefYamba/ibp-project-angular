import { Component } from '@angular/core';
import {BookCardComponent} from "../../shared/book-card/book-card.component";
import {NgForOf} from "@angular/common";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";
import {AnnouncementCardComponent} from "../../shared/announcement-card/announcement-card.component";

@Component({
  selector: 'app-announcement-list',
  standalone: true,
    imports: [
        BookCardComponent,
        NgForOf,
        NgbPagination,
        AnnouncementCardComponent
    ],
  templateUrl: './announcement-list.component.html',
  styleUrl: './announcement-list.component.css'
})
export class AnnouncementListComponent {
}
