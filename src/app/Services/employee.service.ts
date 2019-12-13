import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeeURL: string;

  constructor(private http: HttpClient) {
    this.employeeURL = 'https://lambertcst438backend.herokuapp.com';
    // this.employeeURL = 'http://localhost:8080';
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
    return this.http.get(this.employeeURL + '/employee/getAll', {headers: EmployeeService.getHeaders()});
  }
}
