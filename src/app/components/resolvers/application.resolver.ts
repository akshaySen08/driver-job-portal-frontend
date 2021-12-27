import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApplicationService } from '../services/application.service';
import { AuthService } from '../services/auth.service';


@Injectable({
    providedIn: 'root'
})
export class ApplicationResolver implements Resolve<any> {

    constructor(private appService: ApplicationService, private router: Router, private authService: AuthService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        this.authService.getUser.subscribe();
    }
}


