import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApplicationService } from './application.service';
import { ToastMessagesService } from './toast-messages.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(
        private httpClient: HttpClient,
        private toastService: ToastMessagesService,
        private router: Router
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
        if (user) {
            this.getApplicantDetails(user._id).subscribe(
                usrDetails => {
                    if (usrDetails['success']) {
                        this.user$.next(usrDetails['response'])
                    } else {
                        this.toastService.showMessage('error', usrDetails['message'])
                    }
                }
            )
        } else {
            // this.router.navigate(['/']);
            // return
        }
    }


    public get getUser(): Observable<any> {
        this.setUser();
        return this.user$;
    }

    getApplicantDetails(userId) {
        return this.httpClient.get(`${this.apiUrl}/application/applicant-details/${userId}`);
    }

    getAuthStatus() {
        let user = JSON.parse(localStorage.getItem('user'));

        return user ? (user.token ? true : false) : false;
    }

    forgetPwd(data) {
        return this.httpClient.post(`${this.apiUrl}/auth/forget-password`, data)
    }

    submitOtp(data) {
        return this.httpClient.post(`${this.apiUrl}/auth/check-otp`, data)
    }

    changePwd(data) {
        return this.httpClient.post(`${this.apiUrl}/auth/change-password`, data)
    }

    logout() {
        localStorage.removeItem('user');
        this.router.navigate(['/'])
        this.user$.next({})
    }
}
