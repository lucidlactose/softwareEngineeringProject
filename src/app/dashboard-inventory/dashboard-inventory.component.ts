import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../Services/inventory.service';
import {Employee} from '../model/employee';
import {Inventory} from '../model/inventory';

@Component({
  selector: 'app-dashboard-inventory',
  templateUrl: './dashboard-inventory.component.html',
  styleUrls: ['./dashboard-inventory.component.css']
})
export class DashboardInventoryComponent implements OnInit {

  private inventory: Inventory[];
  private inventoryName: string;
  private target = new Inventory();
  private hide = true;

  constructor(private inventoryService: InventoryService) {
  }

  ngOnInit() {
    this.inventoryService.getAllInventory().subscribe((res: Inventory[]) => {
      this.inventory = res;
    });
  }

  getInventoryName() {
    return this.inventoryName;
  }

  onSubmit() {
    const some = this.getInventoryName();

    this.inventory.forEach((e) => {
      // there is no reason for === on this line
      // tslint:disable-next-line:triple-equals
      if (e.name == some) {
        this.target.name = e.name;
        this.target.description = e.name;
        this.target.price = e.name;
        this.target.stock = e.name;
        this.target.stock = e.imageURL;
        this.hide = false;
      }
    });

  }
}
