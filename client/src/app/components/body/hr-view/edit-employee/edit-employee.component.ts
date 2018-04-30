import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../../../services/employee.service";
import {Router} from "@angular/router";
import {Address} from "../../../../models/address";
import {Employee} from "../../../../models/employee";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  private employee: Employee = new Employee();
  private address: Address = new Address();

  constructor(private employeeService: EmployeeService, public router: Router) { }

  ngOnInit() {
  }

  editEmployeeAndAddress(): void {
    this.employeeService.editEmployee(this.employee).subscribe(employeeObserver => {
      this.employee = employeeObserver[0];
      this.address.employeeId = this.employee.employeeId;

      this.employeeService.editEmployeeAddress(this.employee, this.address).subscribe(addressObserver => {
        this.address = addressObserver;
        this.router.navigate(['/hr']);
      });
    });
  }

}
