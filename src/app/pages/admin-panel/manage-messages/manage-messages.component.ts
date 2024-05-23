import {Component, inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {DatePipe, NgClass, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {PageMessageResponse} from "../../../core/openapi-services/models/page-message-response";
import {MessageService} from "../../../core/openapi-services/services/message.service";
import {FormsModule} from "@angular/forms";
import {ToastService, ToastType} from "../../../core/services/toast.service";
import {ToastComponent} from "../../../shared/toast/toast.component";

@Component({
  selector: 'app-manage-messages',
  standalone: true,
    imports: [
        NgForOf,
        RouterLink,
        NgOptimizedImage,
        FormsModule,
        DatePipe,
        ToastComponent,
        NgIf,
        NgClass
    ],
  templateUrl: './manage-messages.component.html',
  styleUrl: './manage-messages.component.css'
})
export class ManageMessagesComponent implements OnInit{

    listType: 'ADMIN'|'ALL' = 'ALL'
    messagesPage!: PageMessageResponse;

    constructor(private messageService: MessageService) {}

    ngOnInit(): void {
        this.getMessages();
    }


    getMessages() {
        if (this.listType === 'ADMIN'){
            this.messageService.getAllMessagesForAdmins({size:200})
                .subscribe({
                    next: messagePage => {
                        this.messagesPage = messagePage;
                        console.log(this.messagesPage.content)
                    }
                })
        } else {
            this.messageService.getAllMessages({size:200})
                .subscribe({
                    next: messagePage => {
                        this.messagesPage = messagePage;
                        console.log(this.messagesPage.content)
                    }
                });
        }


    }
    deleteMessage(id: number | undefined) {
        if (id) {
            this.messageService.delete1({message_id : id})
                .subscribe({
                    next: response => {
                        this.toastMessage = response.message
                        this.showToast(this.toastElement, ToastType.SUCCESS);
                        this.messagesPage.content = this.messagesPage.content?.filter(message => message.id !== id);
                    },
                    error: err => {
                        this.toastMessage = err.error.message
                        this.showToast(this.toastElement, ToastType.ERROR)
                    }
                })
        }
    }


    // Handle toast
    toastService = inject(ToastService);
    @ViewChild('ToastTpl') toastElement!: TemplateRef<any>;
    toastMessage: string | undefined = "";

    showToast(template: TemplateRef<any>, type: ToastType) {
        if (type === ToastType.SUCCESS){
            this.toastService.show({ template, classname: 'bg-success text-light' });

        } else if (type === ToastType.ERROR){
            this.toastService.show({ template, classname: 'bg-danger text-light' });
        } else {
            this.toastService.show({ template });
        }
    }

}
