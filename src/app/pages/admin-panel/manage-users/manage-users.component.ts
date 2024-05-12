import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {PageUserResponse} from "../../../core/openapi-services/models/page-user-response";
import {UserService} from "../../../core/openapi-services/services/user.service";
import {getAllUsers} from "../../../core/openapi-services/fn/user/get-all-users";

@Component({
  selector: 'app-manage-users',
  standalone: true,
    imports: [
        NgForOf,
        RouterLink,
        NgOptimizedImage,
        NgIf,
        NgClass
    ],
  templateUrl: './manage-users.component.html',
  styleUrl: './manage-users.component.css'
})
export class ManageUsersComponent {

    usersPage!: PageUserResponse;

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.getUsers();
    }

    getUsers(){
        this.userService.getAllUsers({size:200}).subscribe((userPage: PageUserResponse) => {
                this.usersPage = userPage;
            }
        );
    }

    deleteUser(id: number | undefined) {
        if (id) {
            this.userService.delete$Response({user_id : id}).subscribe(value =>
                this.getUsers()
            )
        }
    }
}
