import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Employee} from "../models/employee";
import {Address} from "../models/address";
import {Role} from "../models/role";

@Injectable()
export class EmployeeService {

  private employeesURL = 'http://localhost:8080/api/employee/';
  private rolesURL = 'http://localhost:8080/api/hr/roles';
  // private employeesURL = 'https://ancient-anchorage-61012.herokuapp.com/api/employee';

  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<Employee []>{
    return this.http.get<Employee []>(this.employeesURL);
  }

  getRoles(): Observable<Role []>{
    return this.http.get<Role []>(this.rolesURL);
  }

  getEmployee(employeeId: string): Observable<Employee>{
    return this.http.get<any>(this.employeesURL + employeeId);
  }

  deleteEmployee(employee: Employee): Observable<Employee> {
    return this.http.delete<Employee>(this.employeesURL + employee.employeeId);
  }

  addEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(this.employeesURL, employee);
  }

  addEmployeeAddress(employee: Employee, address : Address) : Observable<Address> {
    return this.http.post<Address>(this.employeesURL + employee.employeeId + '/address', address);
  }

  editEmployee(employee: Employee): Observable<Employee>{
    return this.http.put<Employee>(this.employeesURL + employee.employeeId, employee);
  }

  editEmployeeAddress(employee: Employee, address : Address) : Observable<Address> {
    return this.http.put<Address>(this.employeesURL + employee.employeeId + '/address', address);
  }
}


