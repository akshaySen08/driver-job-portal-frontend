import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApplicationService } from "../../services/application.service";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'app-applcication-page',
    templateUrl: './application-page.component.html',
    styleUrls: ['./application-page.component.scss']
})
export class ApplicationPageComponent implements OnInit {

    constructor(
        private fb: FormBuilder,
        private applicationService: ApplicationService,
        private authService: AuthService
    ) {

    }

    formIndexes = [0, 1, 2, 3]; // 0
    activeFormIndex = 0
    activeForm: FormGroup;

    user: any = {
        about_you: null,
        address: null,
        application_status: null,
        applying_for: null,
        cronic_illness: null,
        cv: null,
        dob: null,
        drink: null,
        driver_liscense: null,
        driver_liscense_gcc: null,
        driving_video: null,
        email: null,
        emergency_phone_number: null,
        eyeglasses: null,
        first_name: null,
        gulf_exp: null,
        gulf_exp_num: null,
        last_name: null,
        nationality: null,
        passport_copy: null,
        phone_number: null,
        photo: null,
        religion: null,
        siblings_in_qatar: null,
        smoke: null,
        speak_english: null,
        whatsapp_number: null,
    };

    /* uploads */
    uploads = {
        passport_copy: '',
        driving_video: '',
        photo: '',
        driver_liscense: '',
        driver_liscense_gcc: '',
        cv: '',
    }

    dataObject = {};

    ngOnInit() {

        // write login for filling the form using this.dataObject
        this.initializeForm(this.user)
        this.authService.user$.subscribe(usr => {
            console.log({
                usr
            });
            debugger
            this.user = usr
            this.initializeForm(this.user)
        })

    }

    /* Basic info form */
    initializeForm(data: any) {

        // for (const key in this.formObject[this.activeFormIndex]) {
        //     this.formObject[this.activeFormIndex][key] = this.user[key]
        // }
        // debugger
        this.activeForm = this.fb.group({
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
            address: [data?.address, Validators.required],

            passport_copy: ['', Validators.required],
            driving_video: ['', Validators.required],
            photo: ['', Validators.required],
            driver_liscense: ['', Validators.required],
            driver_liscense_gcc: ['', Validators.required],
            cv: ['', Validators.required],

            cronic_illness: [data?.cronic_illness, Validators.required],
            eyeglasses: [data?.eyeglasses, Validators.required],
            speak_english: [data?.speak_english, Validators.required],
            gulf_exp: [data?.gulf_exp, Validators.required],
            gulf_exp_num: [data?.gulf_exp_num, Validators.required],
            siblings_in_qatar: [data?.siblings_in_qatar, Validators.required],
            religion: [data?.religion, Validators.required],
            smoke: [data?.smoke, Validators.required],
            drink: [data?.drink, Validators.required],
            p: [data?.p, Validators.required],
            a: [data?.a, Validators.required],
            y: [data?.y, Validators.required],
        })
    }


    handleNextPrevious(index) {

        /* we are not adding images in dataobject as they are added in it when we are uploading image */
        if (this.activeFormIndex != 1) {
            this.dataObject = { ...this.dataObject, ...this.activeForm.getRawValue() };
        }

        this.activeFormIndex = index;
        this.initializeForm(this.user);
        debugger

        console.log({
            Data: this.dataObject
        });

        this.submit();

    }

    imageHandler(event: any, type) {
        console.log(event.target.files[0]);

        this.uploads[type] = event.target.files[0]

        const isNotEmpty = Object.values(this.uploads).every(x => x !== null && x !== '');

        if (isNotEmpty) {
            this.dataObject = { ...this.dataObject, ...this.uploads }

            console.log({
                dataObj: this.dataObject
            });

        }

        console.log({
            uploads: this.uploads
        });

    }

    submit() {
        console.log({
            data: this.dataObject
        });

        const formData = new FormData();

        for (const key in this.dataObject) {
            formData.append(key, this.dataObject[key])
        }

        this.applicationService.submitApplication(formData, this.user._id).subscribe(
            appRes => {
                console.log({
                    appRes
                });
            }
        )
    }


    handlepay() {
        window.location.href = "http://localhost/check-sadad/sadad.php"
    }
}
