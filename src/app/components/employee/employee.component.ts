import { Employee } from './../../shared/models/employee';
import { EmployeeService } from './../../shared/services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService) { }


  ngOnInit() {
    this.employeeService.get().subscribe((employeesArray: Employee[]) => {
      this.employees = employeesArray;
    });
  }

}
