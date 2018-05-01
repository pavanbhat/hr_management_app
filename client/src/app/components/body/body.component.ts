import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EmployeeDialogComponent} from "./dashboard/employee-dialog/employee-dialog.component";
import {MatDialog} from "@angular/material";
import {EmployeeDeleteDialogComponent} from "./dashboard/employee-delete-dialog/employee-delete-dialog.component";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private router: Router, public employeeDialog: MatDialog) { }

  openEmployeeDialog(): void {
    this.employeeDialog.open(EmployeeDialogComponent, {
      width :  '500px'
    });
  }

  openEmployeeDeleteDialog(): void {
    this.employeeDialog.open(EmployeeDeleteDialogComponent, {
      width :  '500px'
    });
  }

  ngOnInit() {
  }
}
