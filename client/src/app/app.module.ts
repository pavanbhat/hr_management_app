import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatGridListModule} from "@angular/material";
import { DashboardComponent } from './components/body/dashboard/dashboard.component';
import { BodyComponent } from './components/body/body.component';
import { AppRoutingModule } from './/app-routing.module';
import { EmployeeComponent } from './components/body/employee/employee.component';
import {EmployeeService} from "./services/employee.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    BodyComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
