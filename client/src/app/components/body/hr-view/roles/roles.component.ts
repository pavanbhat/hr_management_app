import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, PageEvent} from "@angular/material";
import {Employee} from "../../../../models/employee";
import {EmployeeService} from "../../../../services/employee.service";
import {Role} from "../../../../models/role";

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles: Role[] = [];
  keys: any = [];
  dataSource: MatTableDataSource<Role>;
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
    this.getRoles();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getRoles(): void {
    this.employeeService.getRoles().subscribe(rolesObserver => {
      console.log(String(Object.keys(rolesObserver[0])));
      this.roles = rolesObserver;
      if(this.roles.length > 0){
        this.keys = Object.keys(this.roles[0]);
        for (var _i = 0; _i < this.keys.length; _i++) {
          if (this.keys[_i] === '_id' ||  this.keys[_i] === '__v') {
            delete this.keys[_i];
          }
        }
      }
      this.dataSource = new MatTableDataSource<Role>(this.roles);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
