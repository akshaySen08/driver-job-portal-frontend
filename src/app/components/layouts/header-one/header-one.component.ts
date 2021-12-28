import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-header-one',
    templateUrl: './header-one.component.html',
    styleUrls: ['./header-one.component.scss']
})
export class HeaderOneComponent implements OnInit {

    constructor(private authService: AuthService) { }

    user;

    ngOnInit(): void {
        this.authService.user$.subscribe(user => {
            this.user = user
            console.log({
                user
            });

        })
    }


    logout() {
        this.authService.logout()
    }

}
