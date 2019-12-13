import {Employee} from './employee';
import {Inventory} from './Inventory';

export interface User {
  name: string;
  password: string;
  employeeMap: Employee[];
  inventoryMap: Inventory[];
}
