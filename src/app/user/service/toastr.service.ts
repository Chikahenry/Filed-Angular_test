import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private toastr: ToastrService) {}

  showSuccess(title, message, timespan) {
    this.toastr.success(message, title, { timeOut: timespan });
  }

  showError(title, message, timespan) {
    this.toastr.error(message, title, { timeOut: timespan });
  }
}
