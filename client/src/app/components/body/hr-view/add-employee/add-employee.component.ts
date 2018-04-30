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
    /*for(let key of Object.keys(this.employee)){
      console.log(key + this.employee[key]);

    }
    Object.keys(this.address).forEach(key=>{
      console.log(key+" "+this.address[key]);
    })*/
    this.http.post<Employee>(this.employeesPostURL, this.employee).subscribe(employeeObserver =>{
       this.employee = employeeObserver[0];
       this.address.employeeId = this.employee.employeeId;
       for(let key of Object.keys(this.address)){
         console.log(key + " " + this.address[key]);
       }

       this.http.post<Address>(this.employeesPostURL + this.employee.employeeId + '/address', this.address).subscribe(addressObserver => {
         this.address = addressObserver;
         this.router.navigate(['/hr']);
       });
    });
  }
}
