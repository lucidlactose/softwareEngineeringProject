import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    // this.usersUrl = 'https://lambertcst438backend.herokuapp.com/users/getAll';
    this.usersUrl = 'https://lambertcst438backend.herokuapp.com/employee/getAll';
  }

  private static getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS, HEAD',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Accept',
      'Content-Type': 'application/json;charset=UTF-8',
    });
  }


  public getAllUsers() {
    return this.http.get(this.usersUrl + '/users/getAll', {headers: UserService.getHeaders()});
  }

}
