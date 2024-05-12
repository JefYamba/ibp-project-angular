import {Component, Input} from '@angular/core';
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {AnnouncementResponse} from "../../core/openapi-services/models/announcement-response";

@Component({
  selector: 'app-announcement-card',
  standalone: true,
    imports: [
        NgForOf,
        NgIf,
        DatePipe
    ],
  templateUrl: './announcement-card.component.html',
  styleUrl: './announcement-card.component.css'
})
export class AnnouncementCardComponent {
    @Input() announcement!: AnnouncementResponse;

}
