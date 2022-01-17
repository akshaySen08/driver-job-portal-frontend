import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
} from "@angular/router";
import { ApplicationService } from "./application.service";


@Injectable()
export class ApplicationCompletedGuard implements CanActivate {
    constructor(
        private applicationService: ApplicationService,
        private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> {

        let isApplicationCompleted = this.applicationService.getUser()['application_completed']
        if (isApplicationCompleted) {
            this.router.navigate(['/wait-for-reply']);
            return false
        }

        return true;
    }
}
