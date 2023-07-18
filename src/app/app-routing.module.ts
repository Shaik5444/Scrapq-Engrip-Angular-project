import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { CancellationPolicyComponent } from './cancellation-policy/cancellation-policy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

// const routes: Routes = [];
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'book-appointment',
    component: BookAppointmentComponent,
  },
  {
    path: 'book-appointment/:serviceId',
    component: BookAppointmentComponent,
  },
  {
    path: 'faqs',
    component: FaqsComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'our-services',
    component: OurServicesComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    data: { isPageMode: true },
  },
  {
    path: 'cancellation-policy',
    component: CancellationPolicyComponent,
    data: { isPageMode: true },
  },
  {
    path: 'terms-of-service',
    component: TermsOfServiceComponent,
    data: { isPageMode: true },
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
