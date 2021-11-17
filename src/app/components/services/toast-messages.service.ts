import { Injectable, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";


@Injectable({
    providedIn: 'root'
})
export class ToastMessagesService implements OnInit {

    constructor(
        private toastr: ToastrService
    ) { }

    ngOnInit() {

    }

    showMessage(type: string, message: string, title: string = null) {
        switch (type) {
            case 'success':
                this.toastr.success(message, title);
                break;
            case 'error':
                this.toastr.error(message, title);
                break;
            case 'warning':
                this.toastr.warning(message, title);
                break;
            case 'warning':
                this.toastr.info(message, title);
                break;
            default:
                this.toastr.info('Something went wrong', 'Please check');
                break;
        }
    }
}
