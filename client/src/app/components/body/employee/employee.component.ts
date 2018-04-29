import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../../services/employee.service";
import {Employee} from "../../../models/employee";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees : Employee[];
  constructor(private employeeService: EmployeeService) { }

  getEmployees() : void {
    this.employeeService.getEmployees().subscribe(employees => {
       this.employees = employees;
    });
  }

  ngOnInit() {
    this.getEmployees();
  }

}
