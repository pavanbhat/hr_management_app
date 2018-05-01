import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../models/employee";
import {Observable} from "rxjs/Observable";
import {Salary} from "../models/salary";
import {Project} from "../models/project";

@Injectable()
export class EmployeeDataViewService {

  private getEmployeesURL = 'http://localhost:8080/api/employee/';
  constructor(private http: HttpClient) { }

  getEmployeeData(employee : string): Observable<Employee> {
    return this.http.get<Employee>(this.getEmployeesURL + employee).pipe();
  }

  getEmployeeSalaryData(employee : string): Observable<Salary> {
    return this.http.get<Salary>(this.getEmployeesURL + employee + '/salary').pipe();
  }
  getEmployeeProjectData(employee : string): Observable<Project> {
    return this.http.get<Project>(this.getEmployeesURL + employee + '/project').pipe();
  }

}
