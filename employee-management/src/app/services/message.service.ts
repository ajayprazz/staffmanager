import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class MessageService {
  constructor(public toastr: ToastrService) {}

  showSuccess(msg) {
    this.toastr.success(msg);
  }

  showInfo(msg) {
    this.toastr.info(msg);
  }

  showMessage(msg) {
    this.toastr.show(msg);
  }

  showWarning(msg) {
    this.toastr.warning(msg);
  }

  showError(error) {
    if (error.error) {
      this.toastr.error(error.error.message);
    } else if (error.message) {
      this.toastr.error(error.message);
    }
  }
}
