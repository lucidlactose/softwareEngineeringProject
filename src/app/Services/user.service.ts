import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://lambertcst438backend.herokuapp.com/users';
  }

  private static getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS, HEAD',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Accept',
      'Content-Type': 'application/x-www-form-urlencoded'
    });
  }

  private static getUserHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS, HEAD',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Accept',
      'Content-Type': 'application/json;charset=UTF-8',
    });
  }

  public getAllUsers() {
    return this.http.get(this.usersUrl + '/getAll', {headers: UserService.getHeaders()});
  }

  public authenticateUser(username: string, password: string) {
    const parameter: string = 'username=' + username + '&password=' + password;

    return this.http.post(
      this.usersUrl + '/authenticate/{username}{password}',
      parameter,
      {headers: UserService.getHeaders()}
      );
  }


  public registerUser(user: User) {
    return this.http.post(
      this.usersUrl + '/add',
      user,
      {headers: UserService.getUserHeaders()}
    );
  }
}
