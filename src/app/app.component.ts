import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'scrapq-dev';
  // new
  constructor(private toastr: ToastrService) {}

  showToaster() {
    this.toastr.success('Toaster shown!');
    // window.alert('Toaster sucess');
  }
  showToasterError() {
    this.toastr.error('Toaster shown!');
    // window.alert('Toaster ERROR');
  }
  showToasterInfo() {
    this.toastr.info('Toaster shown!');
    // window.alert('This is to show info');
  }
  showToasterWarning() {
    this.toastr.warning('Toaster shown!');
    // window.alert('This is to warning');
  }
}
