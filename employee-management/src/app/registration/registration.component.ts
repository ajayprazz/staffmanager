import { Component, OnInit } from "@angular/core";
import { Employee, EmployeeService } from "../services/employee.service";
import { MessageService } from "../services/message.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"],
})
export class RegistrationComponent implements OnInit {
  public employee;
  public submitting: Boolean = false;

  constructor(
    public employeeService: EmployeeService,
    public messageService: MessageService,
    public router: Router
  ) {
    this.employee = new Employee({});
  }

  ngOnInit() {}

  registration() {
    this.submitting = true;
    this.employeeService.registration(this.employee).subscribe(
      (data: any) => {
        this.submitting = false;
        this.messageService.showSuccess("employee added successfully");
        this.router.navigate(["/employee-list"]);
      },
      (error) => {
        this.submitting = false;
        this.messageService.showError(error);
      }
    );
  }

  cancel() {
    let cancelConfirm = confirm("Are you sure to cancel?");

    if (cancelConfirm) {
      this.router.navigate(["/employee-list"]);
    }
  }
}
