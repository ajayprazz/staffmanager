import { Component, OnInit } from "@angular/core";
import { EmployeeService, Employee } from "../services/employee.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MessageService } from "../services/message.service";

@Component({
  selector: "app-edit-employee",
  templateUrl: "./edit-employee.component.html",
  styleUrls: ["./edit-employee.component.css"]
})
export class EditEmployeeComponent implements OnInit {
  public employee;
  public employeeId;
  constructor(
    public employeeService: EmployeeService,
    public route: ActivatedRoute,
    public router: Router,
    public messageService: MessageService
  ) {
    this.employee = new Employee({});
    this.employeeId = this.route.snapshot.params.id;
  }

  ngOnInit() {
    this.employeeService.getEmployee(this.employeeId).subscribe(
      data => {
        this.employee = data;
      },
      error => {
        this.messageService.showError(error);
      }
    );
  }

  edit() {
    this.employeeService.editEmployee(this.employee).subscribe(
      data => {
        this.messageService.showSuccess("employee detail updated");
        this.router.navigate(["/employee-list"]);
      },
      error => {
        this.messageService.showError(error);
      }
    );
  }
}
