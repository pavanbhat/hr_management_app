import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployeeService} from "../../../services/employee.service";
import {Employee} from "../../../models/employee";
import {MatPaginator, MatSort, MatTableDataSource, PageEvent} from "@angular/material";


@Component({
  selector: 'app-hr-view',
  templateUrl: './hr-view.component.html',
  styleUrls: ['./hr-view.component.css']
})
export class HrViewComponent implements OnInit {

  employees: Employee[] = [];
  keys: any = [];
  dataSource: MatTableDataSource<Employee>;
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

  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.getEmployees();
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
      if(this.employees.length > 0){
        this.keys = Object.keys(this.employees[0]);
        for (var _i = 0; _i < this.keys.length; _i++) {
          if (this.keys[_i] === '_id' || this.keys[_i] === 'password' || this.keys[_i] === '__v' || this.keys[_i] === 'roleName' || this.keys[_i] === 'departmentName' || this.keys[_i] === 'projectName') {
            delete this.keys[_i];
          }
        }
      }
      this.dataSource = new MatTableDataSource<Employee>(this.employees);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
