import { Component, OnInit } from '@angular/core';
import {Employee} from "../../../models/employee";
import {ActivatedRoute} from "@angular/router";
import {EmployeeDataViewService} from "../../../services/employee-data-view.service";
import {Salary} from "../../../models/salary";
import {Project} from "../../../models/project";
import {Role} from "../../../models/role";
import {Department} from "../../../models/department";

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {

  private selectedEmployee : Employee = new Employee();
  private selectedEmployeeSalary : Salary = new Salary();
  private selectedEmployeeProject : Project = new Project();
  private selectedEmployeeRole : Role = new Role();
  private selectedEmployeeDepartment : Department = new Department();
  constructor(private employeeDataService: EmployeeDataViewService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.getEmployeeWithId(this.route.snapshot.paramMap.get('id'));
    this.getEmployeeSalaryWithId(this.route.snapshot.paramMap.get('id'));
    this.getEmployeeProjectWithId(this.route.snapshot.paramMap.get('id'));
    this.getEmployeeRoleWithId(this.route.snapshot.paramMap.get('id'));
    this.getEmployeeDepartmentWithId(this.route.snapshot.paramMap.get('id'));
  }

  getEmployeeWithId(id: string): void {
    this.employeeDataService.getEmployeeData(id).subscribe(employeeObserver => {
      this.selectedEmployee = employeeObserver["employee"];
    });
  }

  getEmployeeSalaryWithId(id: string): void {
    this.employeeDataService.getEmployeeSalaryData(id).subscribe(employeeObserver => {
      this.selectedEmployeeSalary = employeeObserver[0];
    });
  }

  getEmployeeProjectWithId(id: string): void {
    this.employeeDataService.getEmployeeProjectData(id).subscribe(employeeObserver => {
      console.log(String(Object.keys(employeeObserver[0])));
      this.selectedEmployeeProject = employeeObserver[0];
    });
  }

  getEmployeeRoleWithId(id: string): void {
    this.employeeDataService.getEmployeeRoleData(id).subscribe(employeeObserver => {
      this.selectedEmployeeRole = employeeObserver[0];
    });
  }

  getEmployeeDepartmentWithId(id: string): void {
    this.employeeDataService.getEmployeeDepartmentData(id).subscribe(employeeObserver => {
      this.selectedEmployeeDepartment = employeeObserver[0];
    });
  }
}
