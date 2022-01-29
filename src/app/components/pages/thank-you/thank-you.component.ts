// import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from '../../services/application.service';
import { ToastMessagesService } from '../../services/toast-messages.service';

@Component({
    selector: 'thank-you',
    templateUrl: 'thank-you.component.html'
})

export class ThankYouComponent implements OnInit {
    constructor(
        private appService: ApplicationService,
        private route: ActivatedRoute,
        private router: Router,
        private toast: ToastMessagesService
    ) { }

    ngOnInit() {
        let hashed = ''
        this.route.queryParams.subscribe(p => {
            hashed = p.hashed
        })
        console.log({
            hashed
        });

        let user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            this.appService.updatePamyentInfo(user._id, hashed).subscribe(
                res => {
                    if (res['success']) {
                        user.application_completed = true
                        localStorage.setItem('user', JSON.stringify(user))
                        this.toast.showMessage('success', res['message'])
                    } else {
                        this.router.navigate(['/payment-unsuccessful'])
                        this.toast.showMessage('error', res['message'])
                        console.log('Payment not done')
                    }
                }
            )
        }
    }
}
