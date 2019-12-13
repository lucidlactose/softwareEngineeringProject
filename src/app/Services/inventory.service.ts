import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private inventoryURL: string;

  constructor(private http: HttpClient) {
    this.inventoryURL = 'http://localhost:8080';
  }

  private static getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS, HEAD',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Accept',
      'Content-Type': 'application/json;charset=UTF-8',
    });
  }

  public getAllEmployees() {
    return this.http.get(this.inventoryURL + '/inventory/getAll', {headers: InventoryService.getHeaders()});
  }
}
