import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../Services/inventory.service';
import {EmployeeService} from '../Services/employee.service';
import { UserService } from '../Services/user.service';
import { Employee } from '../model/employee';
import { User } from '../model/user';
import { Inventory } from '../model/inventory';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  private employees: Employee[];
  private users: User[];
  private inventory: Inventory[];

  constructor(private employeeService: EmployeeService, private inventoryService: InventoryService, private userService: UserService) {
  }

  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe((res: Employee[]) => {
      this.employees = res;
    });

    this.userService.getAllUsers().subscribe((res: User[]) => {
      this.users = res;
    });

    this.inventoryService.getAllInventory().subscribe((res: Inventory[]) => {
      this.inventory = res;
    });
  }

}
