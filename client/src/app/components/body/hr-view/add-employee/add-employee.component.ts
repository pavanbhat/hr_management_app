import { Component, OnInit } from '@angular/core';
import {Employee} from "../../../../models/employee";
import {Address} from "../../../../models/address";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  private employee: Employee = new Employee();
  private address: Address = new Address();
  private genders: string [] = ['Male', 'Female', 'Other', 'Decline'];
  private employeesPostURL: string = 'http://localhost:8080/api/employee/';
  constructor(private http: HttpClient, public router:Router) { }

  ngOnInit() {
  }

  addEmployee(): void{
    this.http.post<Employee>(this.employeesPostURL, this.employee).subscribe(employeeObserver =>{
       this.employee = employeeObserver;
       this.address.employeeId = this.employee.employeeId;
       this.http.post<Address>(this.employeesPostURL + this.employee.employeeId + '/address', this.address).subscribe(addressObserver => {
         this.address = addressObserver;
         this.router.navigate(['/hr']);
       });
    });
  }
}
