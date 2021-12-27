import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApplicationService {

    constructor(private httpClient: HttpClient) { }

    apiUrl = environment.apiUrl;

    submitApplication(data: FormData, userId): Observable<any> {
        return this.httpClient.post(`${this.apiUrl}/application/submit-application/${userId}`, data);
    }

    getApplicantDetails(userId) {
        return this.httpClient.get(`${this.apiUrl}/application/applicant-details/${userId}`);
    }

    getUser() {
        return JSON.parse(localStorage.getItem('user'))
    }
}
