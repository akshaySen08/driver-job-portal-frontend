import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class ApplicationService {

    constructor(private httpClient: HttpClient, private authService: AuthService) { }

    apiUrl = environment.apiUrl;

    /* Step 1 */
    submitBasicInfo(data: any, userId): Observable<any> {
        return this.httpClient.post(`${this.apiUrl}/application/submit-basic-info/${userId}`, data).pipe(
            tap((res) => {
                this.authService.setUser()
            })
        );
    }

    /* Step 2 */
    submitDocs(data: FormData, userId: string): Observable<any> {
        return this.httpClient.post(`${this.apiUrl}/application/submit-docs/${userId}`, data).pipe(
            tap((res) => {
                this.authService.setUser()
            })
        );
    }

    getUser() {
        return JSON.parse(localStorage.getItem('user'))
    }

    updatePamyentInfo(userId){
        return this.httpClient.post(`${this.apiUrl}/update-pay`, {
            userId
        })
    }

    submitEnquiry(data) {
        return this.httpClient.post(`${this.apiUrl}/enquiry`, data)
    }
}
