import {Component, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {UserResponse} from "../../core/openapi-services/models/user-response";
import {LoggedUserService} from "../../core/services/logged-user.service";
import {TokenService} from "../../core/services/token/token.service";

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

    constructor(
        private loggedUserService:LoggedUserService,
        private tokenService: TokenService,
        private router: Router
    ) {
    }

    ngOnInit(): void {

        this.loggedUserService.getLoggedUser().subscribe(loggedUser => {
            this.loggedUser = loggedUser;
        })
    }

    logout() {
        this.tokenService.deleteToken();
        this.router.navigate(['/login']).then(()=> window.location.reload());
    }
}
