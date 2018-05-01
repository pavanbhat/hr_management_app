import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../../../services/employee.service";
import {ActivatedRoute, Router} from "@angular/router";
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
  private selectedEmployee: Employee = new Employee();
  private selectedAddress : Address = new Address();

  constructor(private employeeService: EmployeeService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.getEmployeeWithId(this.route.snapshot.paramMap.get('id'));
  }

  getEmployeeWithId(id: string): void {
    this.employeeService.getEmployee(id).subscribe(employeeObserver => {
      console.log(Object.values(employeeObserver["address"]));

      this.selectedEmployee = employeeObserver["employee"];
      this.selectedAddress = employeeObserver["address"];
    });
  }

  editEmployeeAndAddress(): void {
    this.employeeService.editEmployee(this.selectedEmployee).subscribe(employeeObserver => {
      this.selectedEmployee = employeeObserver[0];
      this.address.employeeId = this.employee.employeeId;
      this.router.navigate(['/hr']);

      /*this.employeeService.editEmployeeAddress(this.employee, this.address).subscribe(addressObserver => {
        this.address = addressObserver;
        this.router.navigate(['/hr']);
      });*/
    });
  }

}
