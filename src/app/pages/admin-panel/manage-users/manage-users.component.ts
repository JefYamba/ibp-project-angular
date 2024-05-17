import {Component, inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {PageUserResponse} from "../../../core/openapi-services/models/page-user-response";
import {UserService} from "../../../core/openapi-services/services/user.service";
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import {ToastService, ToastType} from "../../../core/services/toast.service";
import {ToastComponent} from "../../../shared/toast/toast.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-manage-users',
  standalone: true,
    imports: [
        NgForOf,
        RouterLink,
        NgOptimizedImage,
        NgIf,
        NgClass,
        NgbToastModule,
        ToastComponent,
        FormsModule
    ],
    providers:[
        HttpClient
    ],
  templateUrl: './manage-users.component.html',
  styleUrl: './manage-users.component.css'
})
export class ManageUsersComponent implements OnInit{
    usersPage!: PageUserResponse;
    searchKeyWord: string = ""

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.getUsers();
    }

    getUsers(){
        this.userService.getAllUsers({q: this.searchKeyWord, size:1000})
            .subscribe({
                next: userPage => {
                    this.usersPage = userPage;
                }
            }
        );
    }

    onKeyUp(event: KeyboardEvent): void {
        if (event.key === 'Enter') {
            this.getUsers();
        }
    }


    deleteUser(id: number | undefined) {
        if (id) {
            this.userService.delete({user_id : id})
                .subscribe({
                    next: response =>{
                        this.toastMessage = response.message
                        this.showToast(this.toastElement, ToastType.SUCCESS);
                        this.usersPage.content = this.usersPage.content?.filter(user => user.id !== id);
                    },
                    error: err => {
                        this.toastMessage = err.error.error
                        this.showToast(this.toastElement, ToastType.ERROR)
                    }
                }
            )
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
