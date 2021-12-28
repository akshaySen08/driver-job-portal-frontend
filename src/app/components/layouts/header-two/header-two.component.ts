import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-header-two',
    templateUrl: './header-two.component.html',
    styleUrls: ['./header-two.component.scss']
})
export class HeaderTwoComponent implements OnInit {

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
