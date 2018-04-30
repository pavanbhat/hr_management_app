import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Employee} from "../models/employee";
import {Address} from "../models/address";

@Injectable()
export class EmployeeService {

  private employeesURL = 'http://localhost:8080/api/employee';
  // private employeesURL = 'https://ancient-anchorage-61012.herokuapp.com/api/employee';

  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<Employee []>{
    return this.http.get<Employee []>(this.employeesURL);
  }

  getEmployee(employeeId: string): Observable<Employee>{
    return this.http.get<Employee>(this.employeesURL);
  }

  addEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(this.employeesURL, employee);
  }

  addEmployeeAddress(employee: Employee, address : Address) : Observable<Address> {
    return this.http.post<Address>(this.employeesURL + employee.employeeId + '/address', address);
  }

  editEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(this.employeesURL, employee);
  }

  editEmployeeAddress(employee: Employee, address : Address) : Observable<Address> {
    return this.http.post<Address>(this.employeesURL + employee.employeeId + '/address', address);
  }
}


