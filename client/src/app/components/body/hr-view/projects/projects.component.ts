import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, PageEvent} from "@angular/material";
import {EmployeeService} from "../../../../services/employee.service";
import {Project} from "../../../../models/project";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];
  keys: any = [];
  dataSource: MatTableDataSource<Project>;
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
    this.getProjects();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getProjects(): void {
    this.employeeService.getProjects().subscribe(projectsObserver => {
      // console.log(String(Object.keys(rolesObserver[0])));
      this.projects = projectsObserver;
      if(this.projects.length > 0){
        this.keys = Object.keys(this.projects[0]);
        for (var _i = 0; _i < this.keys.length; _i++) {
          if (this.keys[_i] === '_id' ||  this.keys[_i] === '__v') {
            delete this.keys[_i];
          }
        }
      }
      this.dataSource = new MatTableDataSource<Project>(this.projects);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
