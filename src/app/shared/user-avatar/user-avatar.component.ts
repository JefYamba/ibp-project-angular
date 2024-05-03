import {Component, Input, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {User} from "../../core/models/User";
import {Role} from "../../core/models/Role";
import {RouterLink} from "@angular/router";

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


    @Input()
    user!: User;
    ngOnInit(): void {
        this.user = {firstName:"Joph Exauce Fouschard",lastname:"Yamba", role:Role.ADMIN, image:"./assets/images/Paimon.jpg"}
    }

    protected readonly Role = Role;
}
