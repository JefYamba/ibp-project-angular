import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {AnnouncementRequest} from "../../../core/openapi-services/models/announcement-request";
import {AnnouncementService} from "../../../core/openapi-services/services/announcement.service";
import {Router, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-edit-announcement',
  standalone: true,
    imports: [
        NgOptimizedImage,
        FormsModule,
        RouterLink
    ],
  templateUrl: './edit-announcement.component.html',
  styleUrl: './edit-announcement.component.css'
})
export class EditAnnouncementComponent implements OnInit{
    announcementRequest!: AnnouncementRequest;

    constructor(
        private announcementService: AnnouncementService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.announcementRequest = { id: 0 , content: "" }
    }

    saveAnnouncement() {
        this.announcementService.register3({body:this.announcementRequest})
            .subscribe({
                next: () =>{
                    this.router.navigate(['admin/announcements']).then(() => window.location.reload());
                },
                error: error => {
                    console.log(error);
                }
            })
    }
}
