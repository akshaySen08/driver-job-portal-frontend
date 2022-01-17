import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HeaderOneComponent } from './components/layouts/header-one/header-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { HeaderTwoComponent } from './components/layouts/header-two/header-two.component';
import { HeaderThreeComponent } from './components/layouts/header-three/header-three.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TeamComponent } from './components/pages/team/team.component';
import { HowItWorksComponent } from './components/pages/how-it-works/how-it-works.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { CustomValidationService } from './helpers/custom-validation.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationPageComponent } from './components/pages/application-page/application-page.component';
import { ThankYouComponent } from './components/pages/thank-you/thank-you.component';
import { AuthGuard } from './components/services/auth-guard.guard';
import { CaptchaComponent } from './components/common/captcha/captcha.component';
import { WaitForReplyComponent } from './components/pages/wait-for-reply/wait-for-reply.component';
import { ApplicationCompletedGuard } from './components/services/check-application-complete.guard';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderOneComponent,
        HomeTwoComponent,
        PartnerComponent,
        HeaderTwoComponent,
        HeaderThreeComponent,
        TeamComponent,
        HowItWorksComponent,
        ContactComponent,
        FaqComponent,
        LoginComponent,
        RegisterComponent,
        ErrorComponent,
        ComingSoonComponent,
        AboutComponent,
        ApplicationPageComponent,
        ThankYouComponent,
        CaptchaComponent,
        WaitForReplyComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot(), // ToastrModule added
        HttpClientModule
    ],
    providers: [
        CustomValidationService,
        AuthGuard,
        ApplicationCompletedGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
