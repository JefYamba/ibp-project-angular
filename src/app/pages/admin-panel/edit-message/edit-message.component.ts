import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {UserService} from "../../../core/openapi-services/services/user.service";
import {MessageRequest} from "../../../core/openapi-services/models/message-request";
import {LoggedUserService} from "../../../core/services/logged-user.service";
import {UserResponse} from "../../../core/openapi-services/models/user-response";
import {FormsModule} from "@angular/forms";
import {MessageService} from "../../../core/openapi-services/services/message.service";

@Component({
  selector: 'app-edit-message',
  standalone: true,
    imports: [
        NgForOf,
        NgOptimizedImage,
        RouterLink,
        NgIf,
        FormsModule
    ],
  templateUrl: './edit-message.component.html',
  styleUrl: './edit-message.component.css'
})
export class EditMessageComponent implements OnInit{
    isAdminLink!:boolean ;
    messageRequest!: MessageRequest;
    receiver!: UserResponse;

    constructor(
        private router: Router,
        private userService: UserService,
        private activatedRoute: ActivatedRoute,
        protected loggedUserService : LoggedUserService,
        private messageService: MessageService,
    ) {
    }

    ngOnInit(): void {
        this.isAdminLink = this.router.url.includes('admin');

        this.messageRequest = {
            id:0,
            content:"",
            senderId: 0,
            receiverId: 0
        }

        this.loggedUserService.getLoggedUser().subscribe({
            next: user =>{
                this.messageRequest.senderId  = user.id ? user.id : 0;
            }
        })

        const idParam = this.activatedRoute.snapshot.paramMap.get('id');
        let receiverId = idParam ? parseInt(idParam, 10) : null;

        if (receiverId) {
            this.userService.get({user_id: receiverId}).subscribe({
                next: userResponse => {
                    this.messageRequest.receiverId = userResponse.id;

                    this.receiver = {
                        id : userResponse.id,
                        email: userResponse.email ? userResponse.email : "",
                        lastName: userResponse.lastName? userResponse.lastName : "",
                        firstName: userResponse.firstName ? userResponse.firstName : "",
                        gender: userResponse.gender,
                        birthDate: userResponse.birthDate,
                        phoneNumber: userResponse.phoneNumber,
                        address: userResponse.address,
                        image: userResponse.image,
                        role: userResponse.role,
                    };
                },
                error: error => {
                    console.log(error);
                }
            })
        }
    }


    saveMassage() {
        this.messageService.register1({body:this.messageRequest})
        .subscribe({
            next: () => {
                if (this.isAdminLink) {
                    this.router.navigate(['/admin/messages']).then(() => window.location.reload())
                } else {
                    this.router.navigate(['/user/messages']).then(() => window.location.reload())
                }
            },
            error: error => {
                console.log(error);
            }
        })
    }
}
