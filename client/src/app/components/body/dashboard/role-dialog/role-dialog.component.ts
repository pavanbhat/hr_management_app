import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MatTableDataSource} from "@angular/material";
import {Employee} from "../../../../models/employee";
import {EmployeeService} from "../../../../services/employee.service";

@Component({
  selector: 'app-role-dialog',
  templateUrl: './role-dialog.component.html',
  styleUrls: ['./role-dialog.component.css']
})
export class RoleDialogComponent implements OnInit {

  private employees : Employee [] = [];
  private keys : string [] = [];

  constructor(public employeeRoleDialog: MatDialogRef<RoleDialogComponent>, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  onNoClick(): void {
    this.employeeRoleDialog.close();
  }

  onSubmit(): void {

  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
      if (this.employees.length > 0) {
        this.keys = Object.keys(this.employees[0]);
        for (var _i = 0; _i < this.keys.length; _i++) {
          if (this.keys[_i] === '_id' || this.keys[_i] === 'password' || this.keys[_i] === '__v') {
            delete this.keys[_i];
          }
        }
      }
    });

  }

}
