export class Employee {
  public _id: String | Number;
  public name: String;
  public title: String;
  public organization: String;
  public managedBy: String;
  public office: String;
  public email: String;
  public phoneNo: String;

  constructor(options: any) {
    for (let key in options) {
      this[key] = options[key] || "";
    }
  }
}

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "./../../environments/environment";

@Injectable()
export class EmployeeService {
  public url;

  constructor(public http: HttpClient) {
    this.url = environment.baseUrl;
  }

  headers() {
    const option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return option;
  }

  registration(data: any) {
    return this.http.post(this.url, data, this.headers());
  }

  employeeList() {
    return this.http.get(this.url, this.headers());
  }

  delete(id) {
    return this.http.delete(this.url + `/${id}`, this.headers());
  }

  getEmployee(id) {
    return this.http.get(this.url + `/${id}`, this.headers());
  }

  editEmployee(data: any) {
    return this.http.put(this.url + `/${data._id}`, data, this.headers());
  }
}
