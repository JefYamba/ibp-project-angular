import {Component, OnInit} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {UserService} from "../../../core/openapi-services/services/user.service";
import {BookService} from "../../../core/openapi-services/services/book.service";
import {AnnouncementService} from "../../../core/openapi-services/services/announcement.service";
import {MessageService} from "../../../core/openapi-services/services/message.service";
import {getAllUsers} from "../../../core/openapi-services/fn/user/get-all-users";

@Component({
  selector: 'app-dashboard',
  standalone: true,
    imports: [
        NgForOf,
        NgOptimizedImage,
        RouterLink
    ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
    userNumber!: number;
    bookNumber!: number;
    announcementNumber!: number;
    messageNumber!: number;

    constructor(
        private userService: UserService,
        private bookService: BookService,
        private announcementService: AnnouncementService,
        private messageService: MessageService
    ) {}

    ngOnInit(): void {
        this.getUsers();
        this.getBooks();
        this.getMessages();
        this.getAllAnnouncements();
    }
    getUsers(){
        this.userService.getAllUsers({size:1000})
            .subscribe({
                    next: userPage => {
                        this.userNumber = userPage.totalElements ? userPage.totalElements : 0;
                    }
                }
            );
    }


    getAllAnnouncements(){
        this.announcementService.getAnnouncements({size:1000})
            .subscribe({
                next: announcementPage =>{
                    this.announcementNumber = announcementPage.totalElements ? announcementPage.totalElements : 0;
                }
            });
    }

    getBooks(){
        this.bookService.getAllBooks({size:1000})
            .subscribe({
                    next: bookPage => {
                        this.bookNumber = bookPage.totalElements ? bookPage.totalElements : 0;
                    }
                }
            );
    }

    getMessages() {
        this.messageService.getAllMessages({size:200})
            .subscribe({
                next: messagePage => {
                    this.messageNumber = messagePage.totalElements ? messagePage.totalElements : 0 ;
                }
            });
    }
}
