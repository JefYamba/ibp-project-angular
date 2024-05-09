import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-edit-announcement',
  standalone: true,
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './edit-announcement.component.html',
  styleUrl: './edit-announcement.component.css'
})
export class EditAnnouncementComponent {

}
