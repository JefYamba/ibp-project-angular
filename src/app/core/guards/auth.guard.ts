import {CanActivateFn, Router} from '@angular/router';
import {TokenService} from "../services/token/token.service";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
    const tokenService: TokenService = inject(TokenService);
    const router = inject(Router);
    const token : string = tokenService.token;
    if (token){
        return true;
    } else {
        router.navigate(['/login']).then(() => window.location.reload());
        return false;
    }
};
