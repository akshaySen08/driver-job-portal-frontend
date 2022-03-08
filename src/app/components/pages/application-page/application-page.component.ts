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

    countries = [
        { code: "+93", countryName: "Afghanistan" },
        { code: "+358", countryName: "Aland Islands" },
        { code: "+355", countryName: "Albania" },
        { code: "+213", countryName: "Algeria" },
        { code: "+1684", countryName: "American Samoa" },
        { code: "+376", countryName: "Andorra" },
        { code: "+244", countryName: "Angola" },
        { code: "+1264", countryName: "Anguilla" },
        { code: "+672", countryName: "Antarctica" },
        { code: "+1268", countryName: "Antigua and Barbuda" },
        { code: "+54", countryName: "Argentina" },
        { code: "+374", countryName: "Armenia" },
        { code: "+297", countryName: "Aruba" },
        { code: "+61", countryName: "Australia" },
        { code: "+43", countryName: "Austria" },
        { code: "+994", countryName: "Azerbaijan" },
        { code: "+1242", countryName: "Bahamas" },
        { code: "+973", countryName: "Bahrain" },
        { code: "+880", countryName: "Bangladesh" },
        { code: "+1246", countryName: "Barbados" },
        { code: "+375", countryName: "Belarus" },
        { code: "+32", countryName: "Belgium" },
        { code: "+501", countryName: "Belize" },
        { code: "+229", countryName: "Benin" },
        { code: "+1441", countryName: "Bermuda" },
        { code: "+975", countryName: "Bhutan" },
        { code: "+591", countryName: "Bolivia" },
        { code: "+599", countryName: "Bonaire, Sint Eustatius and Saba" },
        { code: "+387", countryName: "Bosnia and Herzegovina" },
        { code: "+267", countryName: "Botswana" },
        { code: "+55", countryName: "Bouvet Island" },
        { code: "+55", countryName: "Brazil" },
        { code: "+246", countryName: "British Indian Ocean Territory" },
        { code: "+673", countryName: "Brunei Darussalam" },
        { code: "+359", countryName: "Bulgaria" },
        { code: "+226", countryName: "Burkina Faso" },
        { code: "+257", countryName: "Burundi" },
        { code: "+855", countryName: "Cambodia" },
        { code: "+237", countryName: "Cameroon" },
        { code: "+1", countryName: "Canada" },
        { code: "+238", countryName: "Cape Verde" },
        { code: "+1345", countryName: "Cayman Islands" },
        { code: "+236", countryName: "Central African Republic" },
        { code: "+235", countryName: "Chad" },
        { code: "+56", countryName: "Chile" },
        { code: "+86", countryName: "China" },
        { code: "+61", countryName: "Christmas Island" },
        { code: "+672", countryName: "Cocos (Keeling) Islands" },
        { code: "+57", countryName: "Colombia" },
        { code: "+269", countryName: "Comoros" },
        { code: "+242", countryName: "Congo" },
        { code: "+242", countryName: "Congo, Democratic Republic of the Congo" },
        { code: "+682", countryName: "Cook Islands" },
        { code: "+506", countryName: "Costa Rica" },
        { code: "+225", countryName: "Cote D'Ivoire" },
        { code: "+385", countryName: "Croatia" },
        { code: "+53", countryName: "Cuba" },
        { code: "+599", countryName: "Curacao" },
        { code: "+357", countryName: "Cyprus" },
        { code: "+420", countryName: "Czech Republic" },
        { code: "+45", countryName: "Denmark" },
        { code: "+253", countryName: "Djibouti" },
        { code: "+1767", countryName: "Dominica" },
        { code: "+1809", countryName: "Dominican Republic" },
        { code: "+593", countryName: "Ecuador" },
        { code: "+20", countryName: "Egypt" },
        { code: "+503", countryName: "El Salvador" },
        { code: "+240", countryName: "Equatorial Guinea" },
        { code: "+291", countryName: "Eritrea" },
        { code: "+372", countryName: "Estonia" },
        { code: "+251", countryName: "Ethiopia" },
        { code: "+500", countryName: "Falkland Islands (Malvinas)" },
        { code: "+298", countryName: "Faroe Islands" },
        { code: "+679", countryName: "Fiji" },
        { code: "+358", countryName: "Finland" },
        { code: "+33", countryName: "France" },
        { code: "+594", countryName: "French Guiana" },
        { code: "+689", countryName: "French Polynesia" },
        { code: "+262", countryName: "French Southern Territories" },
        { code: "+241", countryName: "Gabon" },
        { code: "+220", countryName: "Gambia" },
        { code: "+995", countryName: "Georgia" },
        { code: "+49", countryName: "Germany" },
        { code: "+233", countryName: "Ghana" },
        { code: "+350", countryName: "Gibraltar" },
        { code: "+30", countryName: "Greece" },
        { code: "+299", countryName: "Greenland" },
        { code: "+1473", countryName: "Grenada" },
        { code: "+590", countryName: "Guadeloupe" },
        { code: "+1671", countryName: "Guam" },
        { code: "+502", countryName: "Guatemala" },
        { code: "+44", countryName: "Guernsey" },
        { code: "+224", countryName: "Guinea" },
        { code: "+245", countryName: "Guinea-Bissau" },
        { code: "+592", countryName: "Guyana" },
        { code: "+509", countryName: "Haiti" },
        { code: "+0", countryName: "Heard Island and Mcdonald Islands" },
        { code: "+39", countryName: "Holy See (Vatican City State)" },
        { code: "+504", countryName: "Honduras" },
        { code: "+852", countryName: "Hong Kong" },
        { code: "+36", countryName: "Hungary" },
        { code: "+354", countryName: "Iceland" },
        { code: "+91", countryName: "India" },
        { code: "+62", countryName: "Indonesia" },
        { code: "+98", countryName: "Iran, Islamic Republic of" },
        { code: "+964", countryName: "Iraq" },
        { code: "+353", countryName: "Ireland" },
        { code: "+44", countryName: "Isle of Man" },
        { code: "+972", countryName: "Israel" },
        { code: "+39", countryName: "Italy" },
        { code: "+1876", countryName: "Jamaica" },
        { code: "+81", countryName: "Japan" },
        { code: "+44", countryName: "Jersey" },
        { code: "+962", countryName: "Jordan" },
        { code: "+7", countryName: "Kazakhstan" },
        { code: "+254", countryName: "Kenya" },
        { code: "+686", countryName: "Kiribati" },
        { code: "+850", countryName: "Korea, Democratic People's Republic of" },
        { code: "+82", countryName: "Korea, Republic of" },
        { code: "+381", countryName: "Kosovo" },
        { code: "+965", countryName: "Kuwait" },
        { code: "+996", countryName: "Kyrgyzstan" },
        { code: "+856", countryName: "Lao People's Democratic Republic" },
        { code: "+371", countryName: "Latvia" },
        { code: "+961", countryName: "Lebanon" },
        { code: "+266", countryName: "Lesotho" },
        { code: "+231", countryName: "Liberia" },
        { code: "+218", countryName: "Libyan Arab Jamahiriya" },
        { code: "+423", countryName: "Liechtenstein" },
        { code: "+370", countryName: "Lithuania" },
        { code: "+352", countryName: "Luxembourg" },
        { code: "+853", countryName: "Macao" },
        { code: "+389", countryName: "Macedonia, the Former Yugoslav Republic of" },
        { code: "+261", countryName: "Madagascar" },
        { code: "+265", countryName: "Malawi" },
        { code: "+60", countryName: "Malaysia" },
        { code: "+960", countryName: "Maldives" },
        { code: "+223", countryName: "Mali" },
        { code: "+356", countryName: "Malta" },
        { code: "+692", countryName: "Marshall Islands" },
        { code: "+596", countryName: "Martinique" },
        { code: "+222", countryName: "Mauritania" },
        { code: "+230", countryName: "Mauritius" },
        { code: "+269", countryName: "Mayotte" },
        { code: "+52", countryName: "Mexico" },
        { code: "+691", countryName: "Micronesia, Federated States of" },
        { code: "+373", countryName: "Moldova, Republic of" },
        { code: "+377", countryName: "Monaco" },
        { code: "+976", countryName: "Mongolia" },
        { code: "+382", countryName: "Montenegro" },
        { code: "+1664", countryName: "Montserrat" },
        { code: "+212", countryName: "Morocco" },
        { code: "+258", countryName: "Mozambique" },
        { code: "+95", countryName: "Myanmar" },
        { code: "+264", countryName: "Namibia" },
        { code: "+674", countryName: "Nauru" },
        { code: "+977", countryName: "Nepal" },
        { code: "+31", countryName: "Netherlands" },
        { code: "+599", countryName: "Netherlands Antilles" },
        { code: "+687", countryName: "New Caledonia" },
        { code: "+64", countryName: "New Zealand" },
        { code: "+505", countryName: "Nicaragua" },
        { code: "+227", countryName: "Niger" },
        { code: "+234", countryName: "Nigeria" },
        { code: "+683", countryName: "Niue" },
        { code: "+672", countryName: "Norfolk Island" },
        { code: "+1670", countryName: "Northern Mariana Islands" },
        { code: "+47", countryName: "Norway" },
        { code: "+968", countryName: "Oman" },
        { code: "+92", countryName: "Pakistan" },
        { code: "+680", countryName: "Palau" },
        { code: "+970", countryName: "Palestinian Territory, Occupied" },
        { code: "+507", countryName: "Panama" },
        { code: "+675", countryName: "Papua New Guinea" },
        { code: "+595", countryName: "Paraguay" },
        { code: "+51", countryName: "Peru" },
        { code: "+63", countryName: "Philippines" },
        { code: "+64", countryName: "Pitcairn" },
        { code: "+48", countryName: "Poland" },
        { code: "+351", countryName: "Portugal" },
        { code: "+1787", countryName: "Puerto Rico" },
        { code: "+974", countryName: "Qatar" },
        { code: "+262", countryName: "Reunion" },
        { code: "+40", countryName: "Romania" },
        { code: "+70", countryName: "Russian Federation" },
        { code: "+250", countryName: "Rwanda" },
        { code: "+590", countryName: "Saint Barthelemy" },
        { code: "+290", countryName: "Saint Helena" },
        { code: "+1869", countryName: "Saint Kitts and Nevis" },
        { code: "+1758", countryName: "Saint Lucia" },
        { code: "+590", countryName: "Saint Martin" },
        { code: "+508", countryName: "Saint Pierre and Miquelon" },
        { code: "+1784", countryName: "Saint Vincent and the Grenadines" },
        { code: "+684", countryName: "Samoa" },
        { code: "+378", countryName: "San Marino" },
        { code: "+239", countryName: "Sao Tome and Principe" },
        { code: "+966", countryName: "Saudi Arabia" },
        { code: "+221", countryName: "Senegal" },
        { code: "+381", countryName: "Serbia" },
        { code: "+381", countryName: "Serbia and Montenegro" },
        { code: "+248", countryName: "Seychelles" },
        { code: "+232", countryName: "Sierra Leone" },
        { code: "+65", countryName: "Singapore" },
        { code: "+1", countryName: "Sint Maarten" },
        { code: "+421", countryName: "Slovakia" },
        { code: "+386", countryName: "Slovenia" },
        { code: "+677", countryName: "Solomon Islands" },
        { code: "+252", countryName: "Somalia" },
        { code: "+27", countryName: "South Africa" },
        { code: "+500", countryName: "South Georgia and the South Sandwich Islands" },
        { code: "+211", countryName: "South Sudan" },
        { code: "+34", countryName: "Spain" },
        { code: "+94", countryName: "Sri Lanka" },
        { code: "+249", countryName: "Sudan" },
        { code: "+597", countryName: "Suriname" },
        { code: "+47", countryName: "Svalbard and Jan Mayen" },
        { code: "+268", countryName: "Swaziland" },
        { code: "+46", countryName: "Sweden" },
        { code: "+41", countryName: "Switzerland" },
        { code: "+963", countryName: "Syrian Arab Republic" },
        { code: "+886", countryName: "Taiwan, Province of China" },
        { code: "+992", countryName: "Tajikistan" },
        { code: "+255", countryName: "Tanzania, United Republic of" },
        { code: "+66", countryName: "Thailand" },
        { code: "+670", countryName: "Timor-Leste" },
        { code: "+228", countryName: "Togo" },
        { code: "+690", countryName: "Tokelau" },
        { code: "+676", countryName: "Tonga" },
        { code: "+1868", countryName: "Trinidad and Tobago" },
        { code: "+216", countryName: "Tunisia" },
        { code: "+90", countryName: "Turkey" },
        { code: "+7370", countryName: "Turkmenistan" },
        { code: "+1649", countryName: "Turks and Caicos Islands" },
        { code: "+688", countryName: "Tuvalu" },
        { code: "+256", countryName: "Uganda" },
        { code: "+380", countryName: "Ukraine" },
        { code: "+971", countryName: "United Arab Emirates" },
        { code: "+44", countryName: "United Kingdom" },
        { code: "+1", countryName: "United States" },
        { code: "+1", countryName: "United States Minor Outlying Islands" },
        { code: "+598", countryName: "Uruguay" },
        { code: "+998", countryName: "Uzbekistan" },
        { code: "+678", countryName: "Vanuatu" },
        { code: "+58", countryName: "Venezuela" },
        { code: "+84", countryName: "Viet Nam" },
        { code: "+1284", countryName: "Virgin Islands, British" },
        { code: "+1340", countryName: "Virgin Islands, U.s." },
        { code: "+681", countryName: "Wallis and Futuna" },
        { code: "+212", countryName: "Western Sahara" },
        { code: "+967", countryName: "Yemen" },
        { code: "+260", countryName: "Zambia" },
        { code: "+263", countryName: "Zimbabwe" },
    ]

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
            phone_number: [data?.phone_number, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
            countryCodePhone: [data?.countryCodePhone, Validators.required],
            whatsapp_number: [data?.whatsapp_number, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
            countryCodeWhats: [data?.countryCodeWhats, Validators.required],
            email: [data?.email, [Validators.required, Validators.email]],
            emergency_phone_number: [data?.emergency_phone_number, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
            countryCodeEmergency: [data?.countryCodeEmergency, Validators.required],
            about_you: [data?.about_you, Validators.required],
            applying_for: [data?.applying_for, Validators.required],
            address: [data?.address, Validators.required],
            passport_number: [data?.passport_number, Validators.required]
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
            driver_liscense_gcc: [''],
            cv: ['', Validators.required],
        })
    }
    submitDocsForm() {
        const formData = new FormData()
        // const allUploaded = Object.values(this.uploads).every(img => img != '');
        if(!this.uploads.passport_copy ||
        !this.uploads.driving_video ||
        !this.uploads.photo ||
        !this.uploads.driver_liscense ||
        !this.uploads.cv) {
            this.toast.showMessage('error', 'Please upload all required documents or click Next.')
            return
        }
        // if (!allUploaded) {
        // }
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
        console.log(event.target.files[0]);

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
