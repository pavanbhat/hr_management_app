import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./components/body/dashboard/dashboard.component";
import {HrViewComponent} from "./components/body/hr-view/hr-view.component";
import {AddEmployeeComponent} from "./components/body/hr-view/add-employee/add-employee.component";
import {EmployeeViewComponent} from "./components/body/employee-view/employee-view.component";
import {EditEmployeeComponent} from "./components/body/hr-view/edit-employee/edit-employee.component";
import {DepartmentsComponent} from "./components/body/hr-view/departments/departments.component";
import {ProjectsComponent} from "./components/body/hr-view/projects/projects.component";
import {RolesComponent} from "./components/body/hr-view/roles/roles.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'hr',
    component: HrViewComponent
  },
  {
    path: 'hr/roles',
    component: RolesComponent
  },
  {
    path: 'hr/departments',
    component: DepartmentsComponent
  },
  {
    path: 'hr/projects',
    component: ProjectsComponent
  },
  {
    path: 'salary',
    component: HrViewComponent
  },
  {
    path: 'salary',
    component: HrViewComponent
  },
  {
    path: 'hr/addEmployee',
    component: AddEmployeeComponent
  },
  {
    path: 'hr/editEmployee/:id',
    component: EditEmployeeComponent
  },
  {
    path: 'admin/addEmployee',
    component: AddEmployeeComponent
  },
  {
    path: 'admin/editEmployee',
    component: EditEmployeeComponent
  },
  {
    path: 'employee/:id',
    component: EmployeeViewComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule {
}
