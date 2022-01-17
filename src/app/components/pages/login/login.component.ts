import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastMessagesService } from '../../services/toast-messages.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(
        private fb: FormBuilder,
        private toastMessageService: ToastMessagesService,
        private authService: AuthService,
        private router: Router
    ) { }

    loginForm: FormGroup;
    showLoginBtn: boolean;

    ngOnInit(): void {

        let user = JSON.parse(localStorage.getItem('user'))
        if (user && user['token']) {
            this.router.navigate(['/application-page'])
        }
        this.initializeForm();
    }


    initializeForm() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        })
    }

    loginHandler() {

        if (!this.loginForm.valid) {
            return this.toastMessageService.showMessage('error', 'Please enter details properly')
        }

        try {
            this.authService.login(this.loginForm.getRawValue()).subscribe(
                res => {
                    if (res['success']) {
                        /* if application is completed and payment is done we will take to please wait for admin reply page */
                        // if(res['response'].application_completed) {
                        //     this.router.navigate(['/wait-for-reply'])
                        // }else {
                        // }
                        this.router.navigate(['/application-page'])
                    } else {
                        this.toastMessageService.showMessage('error', res['message'])
                    }
                }
            )

        } catch (error) {
            console.log({ error });
        }
    }

    captchaEventHandler(event) {
        this.showLoginBtn = event
        if(event) {
            this.loginHandler()
        }else {
            this.toastMessageService.showMessage('error', 'Something went worng')
        }
    }
}
