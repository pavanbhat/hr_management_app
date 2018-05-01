import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, PageEvent} from "@angular/material";
import {EmployeeService} from "../../../../services/employee.service";
import {Department} from "../../../../models/department";

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  departments: Department[] = [];
  keys: any = [];
  dataSource: MatTableDataSource<Department>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort : MatSort;

  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getDepartments();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getDepartments(): void {
    this.employeeService.getDepartments().subscribe(departmentsObserver => {
      this.departments = departmentsObserver;
      if(this.departments.length > 0){
        this.keys = Object.keys(this.departments[0]);
        for (var _i = 0; _i < this.keys.length; _i++) {
          if (this.keys[_i] === '_id' ||  this.keys[_i] === '__v') {
            delete this.keys[_i];
          }
        }
      }
      this.dataSource = new MatTableDataSource<Department>(this.departments);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
