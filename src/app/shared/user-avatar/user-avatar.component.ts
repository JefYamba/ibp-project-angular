import {Component, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {DummyUser} from "../../core/models/DummyUser";
import {Role} from "../../core/models/Role";
import {RouterLink} from "@angular/router";
import {UserResponse} from "../../core/openapi-services/models/user-response";
import {LoggedUserService} from "../../core/services/logged-user.service";

@Component({
  selector: 'app-user-avatar',
  standalone: true,
    imports: [
        NgOptimizedImage,
        NgIf,
        RouterLink
    ],
  templateUrl: './user-avatar.component.html',
  styleUrl: './user-avatar.component.css'
})
export class UserAvatarComponent implements OnInit{
    loggedUser!: UserResponse;

    constructor(private loggedUserService:LoggedUserService) {
    }

    ngOnInit(): void {

        this.loggedUserService.getLoggedUser().subscribe(loggedUser => {
            this.loggedUser = loggedUser;
        })
    }

}
