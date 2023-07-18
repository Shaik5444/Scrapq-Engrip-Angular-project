import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { CancellationPolicyComponent } from './cancellation-policy/cancellation-policy.component';
import { BookAppointmentCardComponent } from './book-appointment-card/book-appointment-card.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SafeHtmlPipePipe } from '../pipes/safeHtml/safe-html-pipe.pipe';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatIconModule } from '@angular/material/icon';
// import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    BookAppointmentComponent,
    OurServicesComponent,
    FaqsComponent,
    ContactUsComponent,
    PrivacyPolicyComponent,
    PageNotFoundComponent,
    TermsOfServiceComponent,
    CancellationPolicyComponent,
    BookAppointmentCardComponent,
    HomeComponent,
    SafeHtmlPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CdkAccordionModule,
    MatIconModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
