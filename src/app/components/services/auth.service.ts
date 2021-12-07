import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private httpClient: HttpClient) { }

    apiUrl = environment.apiUrl;

    /* local variables */
    user$ = new Subject()

    register(data: any): Observable<any> {
        return this.httpClient.post(`${this.apiUrl}/auth/register`, data)
    }

    login(data: any): Observable<any> {
        return this.httpClient.post(`${this.apiUrl}/auth/login`, data).pipe(
            tap(user => {
                if (user['success']) {
                    localStorage.setItem('user', JSON.stringify(user['response']))
                    this.setUser();
                }
            })
        );
    }


    public setUser() {
        this.user$.next(JSON.parse(localStorage.getItem('user')))
    }


    public get getUser(): Observable<any> {
        this.setUser();
        return this.user$
    }


}
