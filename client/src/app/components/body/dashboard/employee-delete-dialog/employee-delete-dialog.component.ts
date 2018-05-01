import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../../../services/employee.service";
import {MatDialogRef} from "@angular/material";
import {Router} from "@angular/router";
import {Employee} from "../../../../models/employee";

@Component({
  selector: 'app-employee-delete-dialog',
  templateUrl: './employee-delete-dialog.component.html',
  styleUrls: ['./employee-delete-dialog.component.css']
})
export class EmployeeDeleteDialogComponent implements OnInit {

  private employees: Employee [] = [];
  private keys: string [] = [];
  private selectedEmployee : Employee = new Employee();

  constructor(public router: Router, public employeeDialog: MatDialogRef<EmployeeDeleteDialogComponent>, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  onNoClick(): void {
    this.employeeDialog.close();
  }

  onSubmit(): void {
    this.deleteEmployee(this.selectedEmployee);

  }

  deleteEmployee(selectedEmp: Employee): void{

       this.employeeService.deleteEmployee(selectedEmp).subscribe();
       this.onNoClick();
       this.router.navigate(['/dashboard']);
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
