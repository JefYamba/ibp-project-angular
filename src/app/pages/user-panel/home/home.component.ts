import {Component, HostListener, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {BookCardComponent} from "../../../shared/book-card/book-card.component";
import {AnnouncementCardComponent} from "../../../shared/announcement-card/announcement-card.component";
import {BookResponse} from "../../../core/openapi-services/models/book-response";
import {AnnouncementResponse} from "../../../core/openapi-services/models/announcement-response";
import {AnnouncementService} from "../../../core/openapi-services/services/announcement.service";
import {BookService} from "../../../core/openapi-services/services/book.service";


@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        NgOptimizedImage,
        NgForOf,
        NgClass,
        RouterLink,
        BookCardComponent,
        AnnouncementCardComponent,
        NgIf
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
    isOnMobile!:boolean;
    booksList: BookResponse[] | undefined = [];
    announcementsList: AnnouncementResponse[] | undefined = [];

    constructor(
        private bookService: BookService,
        private annnouncementService: AnnouncementService
    ) {
    }

    ngOnInit(): void {
        this.isOnMobile = window.innerWidth  < 768;

        this.bookService.getAllLatestBooks({size: 12}).subscribe(bookPage => {
            this.booksList = bookPage.content;
            }
        )

        this.annnouncementService.getAnnouncements({size: 3}).subscribe(announcementPage => {
            this.announcementsList = announcementPage.content;
            }
        )
    }






    @HostListener('window:resize', ['$event'])
    onResize(event: { target: { innerWidth: number; }; }) {
        this.isOnMobile = event.target.innerWidth < 768;
    }
}
