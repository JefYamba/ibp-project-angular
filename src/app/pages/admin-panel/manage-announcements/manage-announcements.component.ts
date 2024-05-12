import {Component, inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {DatePipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {PageAnnouncementResponse} from "../../../core/openapi-services/models/page-announcement-response";
import {AnnouncementService} from "../../../core/openapi-services/services/announcement.service";
import {ToastService, ToastType} from "../../../core/services/toast.service";
import {ToastComponent} from "../../../shared/toast/toast.component";

@Component({
  selector: 'app-manage-announcements',
  standalone: true,
    imports: [
        NgForOf,
        RouterLink,
        NgOptimizedImage,
        NgIf,
        DatePipe,
        ToastComponent
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
        this.announcementService.getAnnouncements({size:1000})
            .subscribe({
                next: announcementPage =>{
                    this.announcementsPage = announcementPage;
                }
            });
    }

    deleteAnnouncement(id: number | undefined) {
        if (id) {
            this.announcementService.delete3({announcement_id : id})
                .subscribe({
                    next: response =>{
                        this.toastMessage = response.message
                        this.showToast(this.toastElement, ToastType.SUCCESS);
                        this.announcementsPage.content = this.announcementsPage.content?.filter(
                            announcement => announcement.id !== id
                        );
                    },
                    error: err => {
                        this.toastMessage = err.error.message
                        this.showToast(this.toastElement, ToastType.ERROR)
                    }
                })
        }
        this.getAllAnnouncements()
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
