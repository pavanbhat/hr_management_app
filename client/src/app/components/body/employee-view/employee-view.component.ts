import { Component, OnInit } from '@angular/core';
import {Employee} from "../../../models/employee";
import {ActivatedRoute} from "@angular/router";
import {EmployeeDataViewService} from "../../../services/employee-data-view.service";
import {Salary} from "../../../models/salary";
import {Project} from "../../../models/project";

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {

  private selectedEmployee : Employee = new Employee();
  private selectedEmployeeSalary : Salary = new Salary();
  private selectedEmployeeProject : Project = new Project();
  constructor(private employeeDataService: EmployeeDataViewService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.getEmployeeWithId(this.route.snapshot.paramMap.get('id'));
    this.getEmployeeSalaryWithId(this.route.snapshot.paramMap.get('id'));
    this.getEmployeeProjectWithId(this.route.snapshot.paramMap.get('id'));
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
      this.selectedEmployeeProject = employeeObserver[0];
    });
  }
}
