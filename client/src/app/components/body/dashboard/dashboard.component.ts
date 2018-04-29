import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tiles = [
    {text: 'Employee Management', color: 'lightgreen', link: '/employees'},
    {text: 'Role Management', color: 'lightgreen', link: '/roles'},
    {text: 'Department Management', color: 'lightgreen', link: '/departments'},
    {text: 'Project Management', color: 'lightgreen', link: '/projects'},
    {text: 'Salary Management', color: 'lightgreen', link: '/salary'},
    {text: 'Timesheet Management', color: 'lightgreen', link: '/timesheet'},
    {text: 'Leave Management', color: 'lightgreen', link: '/leaves'},
    {text: 'Appraisal Management', color: 'lightgreen', link: '/appraisal'}
  ];

}
