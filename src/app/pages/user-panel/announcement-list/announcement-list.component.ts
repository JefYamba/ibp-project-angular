import {Component, OnInit} from '@angular/core';
import {BookCardComponent} from "../../../shared/book-card/book-card.component";
import {NgForOf, NgIf} from "@angular/common";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";
import {AnnouncementCardComponent} from "../../../shared/announcement-card/announcement-card.component";
import {PageAnnouncementResponse} from "../../../core/openapi-services/models/page-announcement-response";
import {AnnouncementService} from "../../../core/openapi-services/services/announcement.service";


@Component({
  selector: 'app-announcement-list',
  standalone: true,
    imports: [
        BookCardComponent,
        NgForOf,
        NgbPagination,
        AnnouncementCardComponent,
        NgIf
    ],
  templateUrl: './announcement-list.component.html',
  styleUrl: './announcement-list.component.css'
})
export class AnnouncementListComponent implements OnInit {
    announcementPage!: PageAnnouncementResponse;

    constructor(private annnouncementService: AnnouncementService) {
    }

    ngOnInit(): void {
        this.annnouncementService.getAnnouncements({size: 200}).subscribe(announcementPage => {
                this.announcementPage = announcementPage;
            }
        )
    }


}
