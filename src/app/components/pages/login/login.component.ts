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

    ngOnInit(): void {
        this.authService.user$.subscribe(userDetails => {
            if (userDetails['token']) {
                this.router.navigate(['/application-page'])
            }
        })

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

        this.authService.login(this.loginForm.getRawValue()).subscribe(
            res => {
                if(res['success']) {
                    this.router.navigate(['/application-page'])
                }
            }
        )
    }
}
