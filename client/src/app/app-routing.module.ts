import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./components/body/dashboard/dashboard.component";
import {HrViewComponent} from "./components/body/hr-view/hr-view.component";
import {AddEmployeeComponent} from "./components/body/hr-view/add-employee/add-employee.component";
import {EmployeeViewComponent} from "./components/body/employee-view/employee-view.component";
import {EditEmployeeComponent} from "./components/body/hr-view/edit-employee/edit-employee.component";
import {DeleteEmployeeComponent} from "./components/body/admin-view/delete-employee/delete-employee.component";

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
    path: 'hr/addEmployee',
    component: AddEmployeeComponent
  },
  {
    path: 'hr/editEmployee',
    component: EditEmployeeComponent
  },
  {
    path: 'admin/deleteEmployee',
    component: DeleteEmployeeComponent
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
