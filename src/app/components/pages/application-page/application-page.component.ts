import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { ApplicationService } from "../../services/application.service";
import { AuthService } from "../../services/auth.service";
import { ToastMessagesService } from "../../services/toast-messages.service";

@Component({
    selector: 'app-applcication-page',
    templateUrl: './application-page.component.html',
    styleUrls: ['./application-page.component.scss']
})
export class ApplicationPageComponent implements OnInit {

    constructor(
        private fb: FormBuilder,
        private applicationService: ApplicationService,
        private authService: AuthService,
        private toast: ToastMessagesService,
        private router: Router
    ) {

    }

    formIndexes = [0, 1, 2, 3]; // 0
    activeFormIndex = 0
    activeForm: FormGroup;
    imageUrl = environment.imageUrl

    user: any

    /* uploads */
    uploads = {
        passport_copy: '',
        driving_video: '',
        photo: '',
        driver_liscense: '',
        driver_liscense_gcc: '',
        cv: '',
    }


    ngOnInit() {
        this.initBasicInfoForm(this.user);
        this.initDocsform(this.user);
        this.initQuesForm(this.user)
        this.authService.user$.subscribe(usr => {
            this.user = usr
            this.initBasicInfoForm(this.user);
            this.initDocsform(this.user);
            this.initQuesForm(this.user)
        })
    }

    /* Basic info form */
    basicInfoForm: FormGroup;
    initBasicInfoForm(data: any) {
        this.basicInfoForm = this.fb.group({
            first_name: [data?.first_name, Validators.required],
            last_name: [data?.last_name, Validators.required],
            dob: [data?.dob, Validators.required],
            nationality: [data?.nationality, Validators.required],
            phone_number: [data?.phone_number, Validators.required],
            whatsapp_number: [data?.whatsapp_number, Validators.required],
            email: [data?.email, [Validators.required, Validators.email]],
            emergency_phone_number: [data?.emergency_phone_number, Validators.required],
            about_you: [data?.about_you, Validators.required],
            applying_for: [data?.applying_for, Validators.required],
            address: [data?.address, Validators.required]
        })
    }

    submitBasicForm() {
        this.applicationService.submitBasicInfo(this.basicInfoForm.getRawValue(), this.user._id).subscribe(
            res => {
                if (res['success']) {
                    this.activeFormIndex++
                    this.formInitialization();
                } else {
                    this.toast.showMessage('error', res['message'])
                }
            }
        )
    }

    docsForm: FormGroup;
    initDocsform(data) {
        this.docsForm = this.fb.group({
            passport_copy: ['', Validators.required],
            driving_video: ['', Validators.required],
            photo: ['', Validators.required],
            driver_liscense: ['', Validators.required],
            driver_liscense_gcc: ['', Validators.required],
            cv: ['', Validators.required],
        })
    }
    submitDocsForm() {
        const formData = new FormData()
        for (const key in this.uploads) {
            formData.append(key, this.uploads[key])
        }

        this.applicationService.submitDocs(formData, this.user._id).subscribe(
            res => {
                if (res['success']) {
                    this.activeFormIndex++
                    this.formInitialization();
                } else {
                    this.toast.showMessage('error', res['message'])
                }
            }
        )
    }

    quesForm: FormGroup
    initQuesForm(data) {
        this.quesForm = this.fb.group({
            cronic_illness: [data?.cronic_illness, Validators.required],
            eyeglasses: [data?.eyeglasses, Validators.required],
            speak_english: [data?.speak_english, Validators.required],
            gulf_exp: [data?.gulf_exp, Validators.required],
            gulf_exp_num: [data?.gulf_exp_num, Validators.required],
            siblings_in_qatar: [data?.siblings_in_qatar, Validators.required],
            religion: [data?.religion, Validators.required],
            smoke: [data?.smoke, Validators.required],
            drink: [data?.drink, Validators.required],
        })
    }

    submitQuesForm() {
        this.applicationService.submitBasicInfo(this.quesForm.getRawValue(), this.user._id).subscribe(
            res => {
                if (res['success']) {
                    this.activeFormIndex++
                    this.formInitialization();
                } else {
                    this.toast.showMessage('error', res['message'])
                }
            }
        )
    }


    handleNextPrevious(next) {
        next ? this.activeFormIndex++ : this.activeFormIndex--
    }

    uploadsEmpty: boolean;
    imageHandler(event: any, type) {
        this.uploads[type] = event.target.files[0]
        this.uploadsEmpty = Object.values(this.uploads).some(x => x == null && x == '');
    }



    handlepay() {
        window.location.href = "http://allnoob.atwebpages.com/sadad-pay"
    }

    formInitialization() {
        switch (this.activeFormIndex) {
            case 0:
                this.initBasicInfoForm(this.user)
                break;
            case 1:
                this.initDocsform(this.user)
                break;
            case 2:
                this.initQuesForm(this.user)
                break;
            default:
                break;
        }
    }
}
