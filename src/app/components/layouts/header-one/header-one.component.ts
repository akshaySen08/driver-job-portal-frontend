import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application.service';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-header-one',
    templateUrl: './header-one.component.html',
    styleUrls: ['./header-one.component.scss']
})
export class HeaderOneComponent implements OnInit {

    constructor(private applicationService: ApplicationService, private authService: AuthService) { }

    user;

    ngOnInit(): void {
        this.user = this.applicationService.getUser();
    }


    logout() {
        this.authService.logout()
    }

}
