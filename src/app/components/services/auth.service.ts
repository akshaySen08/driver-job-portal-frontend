import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApplicationService } from './application.service';
import { ToastMessagesService } from './toast-messages.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(
        private httpClient: HttpClient,
        private applicationService: ApplicationService,
        private toastService: ToastMessagesService
    ) { }

    apiUrl = environment.apiUrl;

    /* local variables */
    user$ = new Subject()

    register(data: any): Observable<any> {
        return this.httpClient.post(`${this.apiUrl}/auth/register`, data)
    }

    login(data: any): Observable<any> {
        return this.httpClient.post(`${this.apiUrl}/auth/login`, data).pipe(
            tap(user => {
                debugger
                if (user['success']) {
                    localStorage.setItem('user', JSON.stringify(user['response']))
                    this.setUser();
                }
            })
        );
    }


    public setUser() {
        let user = JSON.parse(localStorage.getItem('user'));
        this.applicationService.getApplicantDetails(user._id).subscribe(
            usrDetails => {
                if (usrDetails['success']) {
                    this.user$.next(usrDetails['response'])
                } else {
                    this.toastService.showMessage('error', usrDetails['message'])
                }
            }
        )
    }


    public get getUser(): Observable<any> {
        this.setUser();
        return this.user$;
    }


    checkUserOrLogout() {

    }
}
