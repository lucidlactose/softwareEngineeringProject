import {Employee} from './employee';
import {Inventory} from './inventory';

export interface User {
  name: string;
  password: string;
  employeeMap: Employee[];
  inventoryMap: Inventory[];
}
