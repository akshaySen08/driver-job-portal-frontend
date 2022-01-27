import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastMessagesService } from '../../services/toast-messages.service';

@Component({
    selector: 'app-forget-password',
    templateUrl: './forget-password.html',
    styleUrls: ['./forget-password.scss']
})
export class ForgetPwdComponent implements OnInit {

    constructor(
        private fb: FormBuilder,
        private toastMessageService: ToastMessagesService,
        private authService: AuthService,
        private router: Router
    ) { }

    buttonName = "Submit";
    email: string;
    otp: string;
    showOTP: boolean = false
    resendBtn: boolean = false

    changePassword: boolean = false
    newPwd: string
    cnfNewPwd: string

    ngOnInit(): void {
    }


    emailHandler() {

        if (!this.email) {
            return this.toastMessageService.showMessage('error', 'Please enter details properly')
        }

        try {
            this.authService.forgetPwd({ email: this.email }).subscribe(
                res => {
                    if (res['success']) {
                        this.showOTP = true
                        this.toastMessageService.showMessage('success', res['message'])
                        this.resendOtpBtn()
                    } else {
                        this.toastMessageService.showMessage('error', res['message'])
                    }
                }
            )

        } catch (error) {
            console.log({ error });
        }
    }

    resendOtpBtn() {
        setTimeout(() => {
            this.resendBtn = true
        }, 10000);
    }

    captchaEventHandler(event) {
        if (event) {
            this.emailHandler()
        } else {
            this.toastMessageService.showMessage('error', 'Something went worng')
        }
    }

    submitOtp() {
        console.log({
            OTP: this.otp
        });
        if (this.otp && this.otp.length === 6) {
            this.authService.submitOtp({ otp: this.otp, email: this.email }).subscribe(
                res => {
                    if (res['success']) {
                        this.toastMessageService.showMessage('success', res['message'])
                        this.changePassword = true
                    } else {
                        this.toastMessageService.showMessage('error', res['message'])
                    }
                }
            )
        } else {
            this.toastMessageService.showMessage('error', 'Please enter OTP correctly')
        }
    }

    submitNewPwd() {
        console.log({
            pwd: this.newPwd,
            cnf: this.cnfNewPwd
        });
        if (this.newPwd && this.cnfNewPwd && (this.newPwd === this.cnfNewPwd)) {
            this.authService.changePwd({ email: this.email, newPwd: this.newPwd, cnfPwd: this.cnfNewPwd }).subscribe(
                res => {
                    if (res['success']) {
                        this.toastMessageService.showMessage('success', res['message'])
                        /* redirect to login page */
                        this.router.navigate(['/login'])
                    } else {
                        this.toastMessageService.showMessage('error', res['message'])
                    }
                }
            )
        } else {
            this.toastMessageService.showMessage('error', "Passwords not matched")
        }
    }
}
