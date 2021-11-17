import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-applcication-page',
    templateUrl: './application-page.component.html',
    styleUrls: ['./application-page.component.scss']
})
export class ApplicationPageComponent implements OnInit {

    constructor(
        private fb: FormBuilder
    ) { }

    formIndexes = [0, 1, 2, 3]; // 0
    activeFormIndex = 0
    activeForm: FormGroup;

    /* uploads */
    uploads = {
        passport_copy: '',
        driving_video: '',
        photo: '',
        driver_liscense: '',
        driver_liscense_gcc: '',
        cv: '',
    }

    formObject = [
        {
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            dob: ['', Validators.required],
            nationality: ['', Validators.required],
            phone_number: ['', Validators.required],
            whatsapp_number: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            emergency_phone_number: ['', Validators.required],
            about_you: ['', Validators.required],
            applying_for: ['', Validators.required],
            address: ['', Validators.required],
        },
        {
            passport_copy: ['', Validators.required],
            driving_video: ['', Validators.required],
            photo: ['', Validators.required],
            driver_liscense: ['', Validators.required],
            driver_liscense_gcc: ['', Validators.required],
            cv: ['', Validators.required],
        },
        {
            cronic_illness: [false, Validators.required],
            eyeglasses: [false, Validators.required],
            speak_english: [false, Validators.required],
            gulf_exp: [false, Validators.required],
            gulf_exp_num: [0, Validators.required],
            siblings_in_qatar: [false, Validators.required],
            religion: ['', Validators.required],
            smoke: [false, Validators.required],
            drink: [false, Validators.required],
        },
        {
            p: ['', Validators.required],
            a: ['', Validators.required],
            y: ['', Validators.required],
        }
    ]

    dataObject = {};

    ngOnInit() {
        this.initializeForm(this.formObject[this.activeFormIndex])
        // write login for filling the form using this.dataObject
        // for (const key in this.formObject[this.activeFormIndex]) {
        //     this.formObject[this.activeFormIndex][key] = this.dataObject[key]
        // }


    }

    /* Basic info form */
    initializeForm(data: Object) {
        this.activeForm = this.fb.group(data)
    }


    handleNextPrevious(index) {

        /* we are not adding images in dataobject as they are added in it when we are uploading image */
        if (this.activeFormIndex != 1) {
            this.dataObject = { ...this.dataObject, ...this.activeForm.getRawValue() };
        }

        this.activeFormIndex = index;
        this.initializeForm(this.formObject[this.activeFormIndex]);

        console.log({
            Data: this.dataObject
        });

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
}
