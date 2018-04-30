import {Component, OnInit} from '@angular/core';
import {Employee} from "../../../../models/employee";
import {Address} from "../../../../models/address";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {EmployeeService} from "../../../../services/employee.service";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  private employee: Employee = new Employee();
  private address: Address = new Address();
  private genders: string [] = ['Male', 'Female', 'Other', 'Decline'];


  constructor(private employeeService: EmployeeService, public router: Router) {
  }

  ngOnInit() {
  }

  addEmployeeAndAddress(): void {
    this.employeeService.addEmployee(this.employee).subscribe(employeeObserver => {
      this.employee = employeeObserver[0];
      this.address.employeeId = this.employee.employeeId;

      this.employeeService.addEmployeeAddress(this.employee, this.address).subscribe(addressObserver => {
        this.address = addressObserver;
        this.router.navigate(['/hr']);
      });
    });
  }
}
