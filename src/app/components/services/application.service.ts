import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApplicationService {

    constructor(private httpClient: HttpClient) { }

    apiUrl = environment.apiUrl;

    submitApplication(data: FormData): Observable<any> {
        const user = JSON.parse(localStorage.getItem('user'))
        return this.httpClient.post(`${this.apiUrl}/application/submit-application/${user._id}`, data);
    }
}
