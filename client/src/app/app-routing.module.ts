import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./components/body/dashboard/dashboard.component";
import {HrViewComponent} from "./components/body/hr-view/hr-view.component";
import {AddEmployeeComponent} from "./components/body/hr-view/add-employee/add-employee.component";
import {EmployeeViewComponent} from "./components/body/employee-view/employee-view.component";

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
