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
    // this.getEmployees();
  }

  onNoClick(): void {
    this.employeeRoleDialog.close();
  }

  onSubmit(): void {

  }


}
