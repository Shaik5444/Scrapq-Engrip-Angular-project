import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/common/common.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
})
export class FaqsComponent implements OnInit {
  faqs: any = [];

  constructor(private commonService: CommonService) {}

  async ngOnInit() {
    (await this.commonService.getFaqs()).subscribe((res: any) => {
      this.faqs = res.data.faqData.map((faqData: any) => faqData.faqs).flat();
      console.log(this.faqs);
    });
  }
  expandedIndex = 0;
}
