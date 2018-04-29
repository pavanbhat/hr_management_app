import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Employee} from "../models/employee";

@Injectable()
export class EmployeeService {

  private employeesURL = 'http://localhost:8080/api/employee';

  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<Employee []>{
    return this.http.get<Employee []>(this.employeesURL);
  }

}


