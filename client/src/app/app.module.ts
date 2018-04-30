import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatDialogModule,
  MatSelectModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule, MatTabsModule,
} from "@angular/material";
import { DashboardComponent } from './components/body/dashboard/dashboard.component';
import { BodyComponent } from './components/body/body.component';
import { AppRoutingModule } from './/app-routing.module';
import {EmployeeService} from "./services/employee.service";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { RoleDialogComponent } from './components/body/dashboard/role-dialog/role-dialog.component';
import { AdminViewComponent } from './components/body/admin-view/admin-view.component';
import { HrViewComponent } from './components/body/hr-view/hr-view.component';
import { EmployeeViewComponent } from './components/body/employee-view/employee-view.component';
import { AddEmployeeComponent } from './components/body/hr-view/add-employee/add-employee.component';
import {FormsModule} from "@angular/forms";
import { EditEmployeeComponent } from './components/body/hr-view/edit-employee/edit-employee.component';
import {DeleteEmployeeComponent} from "./components/body/admin-view/delete-employee/delete-employee.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    BodyComponent,
    RoleDialogComponent,
    AdminViewComponent,
    HrViewComponent,
    EmployeeViewComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule ,
    MatSortModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent] ,
  entryComponents: [
    RoleDialogComponent
  ]
})
export class AppModule { }
