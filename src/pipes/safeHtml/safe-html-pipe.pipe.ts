import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
})
export class SafeHtmlPipePipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}

  public transform(value: any): any {
    // const sanitizedContent = DOMPurify.sanitize(value);
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
