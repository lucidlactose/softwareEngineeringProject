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
  private employeeName: string;
  private target = new Employee();
  private hide = true;

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
      // there is no reason for === on this line
      // tslint:disable-next-line:triple-equals
      if (e.name == some) {
        this.target.name = e.name;
        this.target.salary = e.salary;
        this.hide = false;
      }
    });

    return this.employeeName;
  }
}
