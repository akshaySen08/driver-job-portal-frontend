import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application.service';

@Component({
    selector: 'thank-you',
    templateUrl: 'thank-you.component.html'
})

export class ThankYouComponent implements OnInit {
    constructor(
        private appService: ApplicationService
    ) { }

    ngOnInit() {
        let user = JSON.parse(localStorage.getItem('user'))
        if(user) {
            this.appService.updatePamyentInfo(user._id).subscribe(
                res => {
                    if(res['success']) {
                        console.log('Payment Done')
                    }else{
                        console.log('Payment not done')
                    }
                }
            )
        }
     }
}
