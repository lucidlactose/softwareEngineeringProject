import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import {EmployeeService} from '../Services/employee.service';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.css']
})
export class EmployeesPageComponent implements OnInit {

  private employees: Employee[];
  employeeName: string;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe((res: Employee[]) => {
      this.employees = res;
    });
  }

  getEmployeeName() {
    return this.employeeName;
  }

  onSubmit() {
    const some = this.getEmployeeName();

    this.employees.forEach((e) => {
      if (e.name == some) {
      }
    });

    console.log();
    return this.employeeName;
  }

  findEmployee = () => {

  }
}
