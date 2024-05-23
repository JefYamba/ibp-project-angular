import {Component, OnInit} from '@angular/core';
import {DatePipe, NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {PageMessageResponse} from "../../../core/openapi-services/models/page-message-response";
import {MessageService} from "../../../core/openapi-services/services/message.service";
import {LoggedUserService} from "../../../core/services/logged-user.service";
import {UserResponse} from "../../../core/openapi-services/models/user-response";

@Component({
  selector: 'app-user-messages',
  standalone: true,
    imports: [
        NgForOf,
        RouterLink,
        DatePipe
    ],
  templateUrl: './user-messages.component.html',
  styleUrl: './user-messages.component.css'
})
export class UserMessagesComponent implements OnInit{

    pageSentMessages!: PageMessageResponse;
    pageReceivedMessages!: PageMessageResponse;
    loggedUser!: UserResponse;

    constructor(
        private messageService: MessageService,
        protected loggedUserService : LoggedUserService) {
    }

    ngOnInit(): void {
        this.loggedUserService.getLoggedUser().subscribe({
            next: user => {
                this.loggedUser = user;
                this.getMessages();
            }
        });
    }


    getMessages(){
        if (this.loggedUser && this.loggedUser.id) {
            this.messageService.getAllMessagesForReceiver({ receiver_id: this.loggedUser.id, size: 1000})
                .subscribe({
                    next: messagePage => {
                        this.pageReceivedMessages = messagePage;
                    }
                });

            this.messageService.getAllMessagesForSender({ sender_id: this.loggedUser.id, size: 1000})
                .subscribe({
                    next: messagePage => {
                        this.pageSentMessages = messagePage;
                    }
                });
        }
    }

}
