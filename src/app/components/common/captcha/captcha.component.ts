import { Component, EventEmitter, OnInit, Output } from "@angular/core";


@Component({
    templateUrl: "./captcha.component.html",
    selector: "app-captcha",
    styleUrls: ["./captcha.component.css"]
})
export class CaptchaComponent implements OnInit {
    ngOnInit(): void {
        this.generate();
    }

    @Output() captchaEvent = new EventEmitter<boolean>()

    captcha: any;
    alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    generatedCaptcha: string;
    enteredCaptcha: string;
    status: string = "Please enter captcha to continue";

    generate = () => {
        let first = this.alphabets[Math.floor(Math.random() * this.alphabets.length)];
        let second = Math.floor(Math.random() * 10);
        let third = Math.floor(Math.random() * 10);
        let fourth = this.alphabets[Math.floor(Math.random() * this.alphabets.length)];
        let fifth = this.alphabets[Math.floor(Math.random() * this.alphabets.length)];
        let sixth = Math.floor(Math.random() * 10);
        this.captcha = first.toString() + second.toString() + third.toString() + fourth.toString() + fifth.toString() + sixth.toString();
        this.generatedCaptcha = this.captcha;
        this.enteredCaptcha = '';
        this.status = "Please enter captcha to continue"
    }

    check = () => {
        let userValue = this.enteredCaptcha;
        if (userValue == this.captcha) {
            this.status = "Correct!!"
            this.captchaEvent.emit(true)
        } else {
            this.status = "Try Again!!"
            this.enteredCaptcha = '';
        }
    }
}
