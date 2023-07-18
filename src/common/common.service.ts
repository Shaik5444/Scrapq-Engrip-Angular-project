import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/http/http.service';
import { REST_APIS } from 'src/services/RestApis';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private httpService: HttpService) {}
  getPrivacyPolicy() {
    const url = environment.API_URL + REST_APIS.privacyPolicy;
    return this.httpService.get(url);
  }

  async getFaqs() {
    const url = environment.API_URL + REST_APIS.faqs;
    return this.httpService.get(url);
  }
}
