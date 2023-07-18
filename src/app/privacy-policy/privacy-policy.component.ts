import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/common/common.service';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css'],
})
export class PrivacyPolicyComponent {
  privacyPolicy = '';
  errorMessage = '';
  isPageMode: any;
  // myHtml = '<div>Hello world!</div>';

  constructor(
    private commonService: CommonService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getPrivacyPolicy();
    this.isPageMode = this.activatedRoute.snapshot.data['isPageMode'];
  }

  async getPrivacyPolicy() {
    (await this.commonService.getPrivacyPolicy()).subscribe((response: any) => {
      if (response.status === 'SUCCESS') {
        this.privacyPolicy = response.data.privacyPolicy;
        console.log(this.privacyPolicy);
      } else {
        this.errorMessage =
          'Error retrieving privacy policy. Please try again later.';
      }
    });
  }

  exportToExcel() {
    var result = [this.privacyPolicy];
    const myJsonString = JSON.stringify(result);
    const blob = new Blob([myJsonString], {
      type: 'application/vnd.ms-excel;charset=utf-8',
    });

    saveAs(blob, 'Report.xls');
  }
  downloadData() {
    this.toastr.info('Download is in progress, "Downloading!');
    setTimeout(() => {
      this.toastr.clear();
      this.toastr.success('Download is completed', 'Download complete');
      this.exportToExcel();
    }, 3000);
  }
}

// type: 'application/vnd.ms-excel;charset=utf-8';
