import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {EmployeeService} from "../../../services/employee.service";
import {Employee} from "../../../models/employee";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Sort} from '@angular/material';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, AfterViewInit {

  employees: Employee[] = [];
  keys: any = [];
  private dataSource: MatTableDataSource<Employee>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private sortedData;

  constructor(private employeeService: EmployeeService) {
    this.sortedData = this.employees.slice();
  }

  ngOnInit() {
    this.getEmployees();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  sortData(sort: Sort) {
    const data = this.employees.slice();
    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
        switch (sort.active) {
          case 'employeeId':
            return this.compare(a.employeeId, b.employeeId, isAsc);
          case 'username':
            return this.compare(a.username, b.username, isAsc);
          case 'firstName':
            return this.compare(a.firstName, b.firstName, isAsc);
          case 'middleName':
            return this.compare(a.middleName, b.middleName, isAsc);
          case 'lastName':
            return this.compare(a.lastName, b.lastName, isAsc);
          case 'email':
            return this.compare(a.email, b.email, isAsc);
          case 'gender':
            return this.compare(a.gender, b.gender, isAsc);
          case 'dateOfBirth':
            return this.compare(a.dateOfBirth, b.dateOfBirth, isAsc);
          case 'phoneNumber':
            return this.compare(a.phoneNumber, b.phoneNumber, isAsc);
          case 'roleId':
            return this.compare(a.roleId, b.roleId, isAsc);
          default:
            return 0;
        }

    });
  }


  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
      this.keys = Object.keys(this.employees[0]);
      for (var _i = 0; _i < this.keys.length; _i++) {
        if (this.keys[_i] === '_id' || this.keys[_i] === 'password' || this.keys[_i] === '__v') {
          delete this.keys[_i];
        }
      }
      this.dataSource = new MatTableDataSource<Employee>(this.employees);
    });
  }

}
