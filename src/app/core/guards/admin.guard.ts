import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {LoggedUserService} from "../services/logged-user.service";
import {LoggedUserModel} from "../models/logged-user.model";

export const adminGuard: CanActivateFn = (route, state) => {
    const loggedUserService: LoggedUserService = inject(LoggedUserService);
    const router = inject(Router);
    const user : LoggedUserModel = loggedUserService.getUser();

    if (user.roles === route.data['role']){
        return true;
    } else {
        router.navigate(['/']).then(() => window.location.reload());
        return false;
    }
};
