import {Component, OnInit} from '@angular/core';
import {DatePipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {PageAnnouncementResponse} from "../../../core/openapi-services/models/page-announcement-response";
import {AnnouncementService} from "../../../core/openapi-services/services/announcement.service";

@Component({
  selector: 'app-manage-announcements',
  standalone: true,
    imports: [
        NgForOf,
        RouterLink,
        NgOptimizedImage,
        NgIf,
        DatePipe
    ],
  templateUrl: './manage-announcements.component.html',
  styleUrl: './manage-announcements.component.css'
})
export class ManageAnnouncementsComponent implements OnInit{

    announcementsPage!: PageAnnouncementResponse;

    constructor(private announcementService: AnnouncementService) {}

    ngOnInit(): void {
        this.getAllAnnouncements();
    }

    getAllAnnouncements(){
        this.announcementService.getAnnouncements({size:200}).subscribe((announcementPage: PageAnnouncementResponse) => {
            this.announcementsPage = announcementPage;
        });
    }

    deleteAnnouncement(id: number | undefined) {
        if (id) {
            this.announcementService.delete3({announcement_id : id}).subscribe(value => value)
        }
        this.getAllAnnouncements()
    }
}
