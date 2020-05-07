import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "./../services/employee.service";
import { Router } from "@angular/router";
import { MessageService } from "../services/message.service";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  public employees: Array<any>;
  public p: Number = 1;

  constructor(
    public employeeService: EmployeeService,
    public router: Router,
    public messageService: MessageService
  ) {}

  ngOnInit() {
    this.employeeService.employeeList().subscribe(
      (data: any) => {
        this.employees = data;
      },
      error => {
        console.log("error", error);
      }
    );
  }

  delete(id, i) {
    let delConfirm = confirm("Are you sure to delete?");
    if (delConfirm) {
      this.employeeService.delete(id).subscribe(
        (data: any) => {
          this.employees.splice(i, 1);
          this.messageService.showSuccess("emplpoyee deleted");
        },
        error => {
          this.messageService.showError(error);
        }
      );
    }
  }
}
