import {Component, OnInit} from '@angular/core';
import {Employee} from "../../../../models/employee";
import {EmployeeService} from "../../../../services/employee.service";
import {MatDialogRef} from "@angular/material";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.css']
})
export class EmployeeDialogComponent implements OnInit {

  private employees: Employee [] = [];
  private keys: string [] = [];
  private selectedEmployee : Employee = new Employee();

  constructor(public router: Router, public employeeDialog: MatDialogRef<EmployeeDialogComponent>, private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.getEmployees();
  }

  onNoClick(): void {
    this.employeeDialog.close();
  }

  onSubmit(): void {
    this.router.navigate(['/hr/editEmployee/', this.selectedEmployee.employeeId]);
    this.onNoClick();
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
