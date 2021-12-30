import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomValidationService } from 'src/app/helpers/custom-validation.service';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    constructor(
        private fb: FormBuilder,
        private customValidation: CustomValidationService,
        private authService: AuthService,
        private toastr: ToastrService,
        private router: Router
    ) { }

    registerForm: FormGroup

    ngOnInit(): void {
        this.initializeForm();
    }

    initializeForm() {
        this.registerForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.min(6)]],
            cpassword: ['', Validators.required],
        },
            {
                validator: this.customValidation.MatchPassword(
                    "password",
                    "cpassword"
                ),
            })
    }


    signUp() {
        if (this.registerForm.invalid) {
            this.toastr.error('Please enter your details properly');
            return
        }
        this.authService.register(this.registerForm.getRawValue()).subscribe(
            res => {
                if(res['success']) {
                    this.toastr.success('Please login with the same credentials.')
                    this.router.navigate(['/login'])
                }else {
                    this.toastr.error(res['message'])
                }
            }
        )
    }
}