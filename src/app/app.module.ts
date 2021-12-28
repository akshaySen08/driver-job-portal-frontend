import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { AppDownloadComponent } from './components/common/app-download/app-download.component';
import { FeedbackComponent } from './components/common/feedback/feedback.component';
import { VideoComponent } from './components/common/video/video.component';
import { ProcessComponent } from './components/common/process/process.component';
import { HeaderOneComponent } from './components/layouts/header-one/header-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { HeaderTwoComponent } from './components/layouts/header-two/header-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { HomeFourComponent } from './components/pages/home-four/home-four.component';
import { InstagramComponent } from './components/common/instagram/instagram.component';
import { HeaderThreeComponent } from './components/layouts/header-three/header-three.component';
import { AboutComponent } from './components/pages/about/about.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';
import { TeamComponent } from './components/pages/team/team.component';
import { HowItWorksComponent } from './components/pages/how-it-works/how-it-works.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { CategoriesOneComponent } from './components/pages/categories-one/categories-one.component';
import { CategoriesTwoComponent } from './components/pages/categories-two/categories-two.component';
import { ListingOneComponent } from './components/pages/listing-one/listing-one.component';
import { ListingTwoComponent } from './components/pages/listing-two/listing-two.component';
import { ListingThreeComponent } from './components/pages/listing-three/listing-three.component';
import { ListingFourComponent } from './components/pages/listing-four/listing-four.component';
import { ListingFiveComponent } from './components/pages/listing-five/listing-five.component';
import { ListingDetailsComponent } from './components/pages/listing-details/listing-details.component';
import { ProductListComponent } from './components/pages/product-list/product-list.component';
import { ProductsDetailsComponent } from './components/pages/products-details/products-details.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { BlogOneComponent } from './components/pages/blog-one/blog-one.component';
import { BlogTwoComponent } from './components/pages/blog-two/blog-two.component';
import { BlogThreeComponent } from './components/pages/blog-three/blog-three.component';
import { BlogFourComponent } from './components/pages/blog-four/blog-four.component';
import { BlogFiveComponent } from './components/pages/blog-five/blog-five.component';
import { BlogDetailsOneComponent } from './components/pages/blog-details-one/blog-details-one.component';
import { BlogDetailsTwoComponent } from './components/pages/blog-details-two/blog-details-two.component';
import { BlogDetailsThreeComponent } from './components/pages/blog-details-three/blog-details-three.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeOneComponent,
    FooterComponent,
    AppDownloadComponent,
    FeedbackComponent,
    VideoComponent,
    ProcessComponent,
    HeaderOneComponent,
    HomeTwoComponent,
    PartnerComponent,
    HeaderTwoComponent,
    HomeThreeComponent,
    HomeFourComponent,
    InstagramComponent,
    HeaderThreeComponent,

    FunfactsComponent,
    TeamComponent,
    HowItWorksComponent,
    ContactComponent,
    CategoriesOneComponent,
    CategoriesTwoComponent,
    ListingOneComponent,
    ListingTwoComponent,
    ListingThreeComponent,
    ListingFourComponent,
    ListingFiveComponent,
    ListingDetailsComponent,
    ProductListComponent,
    ProductsDetailsComponent,
    CartComponent,
    CheckoutComponent,
    BlogOneComponent,
    BlogTwoComponent,
    BlogThreeComponent,
    BlogFourComponent,
    BlogFiveComponent,
    BlogDetailsOneComponent,
    BlogDetailsTwoComponent,
    BlogDetailsThreeComponent,
    FaqComponent,

    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    ComingSoonComponent,
    AboutComponent,
    ApplicationPageComponent,
    ThankYouComponent
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
      CustomValidationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
