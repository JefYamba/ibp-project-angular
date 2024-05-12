import {Component, OnInit} from '@angular/core';
import {DatePipe, NgForOf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {PageMessageResponse} from "../../../core/openapi-services/models/page-message-response";
import {MessageService} from "../../../core/openapi-services/services/message.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-manage-messages',
  standalone: true,
    imports: [
        NgForOf,
        RouterLink,
        NgOptimizedImage,
        FormsModule,
        DatePipe
    ],
  templateUrl: './manage-messages.component.html',
  styleUrl: './manage-messages.component.css'
})
export class ManageMessagesComponent implements OnInit{
    messagesPage!: PageMessageResponse;

    constructor(private messageService: MessageService) {}

    ngOnInit(): void {
        this.getAllMessages();
    }

    getAllMessages(){
        this.messageService.getAllMessages({size:200}).subscribe((messagePage: PageMessageResponse) => {
            this.messagesPage = messagePage;
        });
    }
    getAllAdminMessages(){
        this.messageService.getAllMessagesForAdmins({size:200}).subscribe((messagePage: PageMessageResponse) => {
            this.messagesPage = messagePage;
        })
    }

    deleteMessage(id: number | undefined) {
        if (id) {
            this.messageService.delete1({message_id : id}).subscribe(value => value)
        }
        this.getAllMessages()
    }
}
