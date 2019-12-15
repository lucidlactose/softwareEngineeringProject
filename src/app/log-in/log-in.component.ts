import { Component, OnInit } from '@angular/core';
import {UserService} from '../Services/user.service';
import { Router } from '@angular/router';
import {User} from '../model/user';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  private username: string;
  private email: string;
  private password: string;
  private passwordCheck: string;

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
  }

  authenticate() {
    this.userService.authenticateUser(this.username, this.password).subscribe(
      (res: any) => {},
      (error: any) => {
        if (error.error.text === 'Logged in.') {
          if (this.username === 'admin') {
            this.router.navigateByUrl('/adminPage');
          }
          this.router.navigateByUrl('/profilePage');
        }
      });
  }

  register() {
    const user: User = new User();
    user.name = this.username;
    user.password = this.password;
    user.email = this.email;
    user.employeeMap = {};
    user.inventoryMap = {};

    if (this.password !== this.passwordCheck) {
      return;
    }

    this.userService.registerUser(user).subscribe(
      (res: any) => {
        this.router.navigateByUrl('/adminPage');
      },
      (error: any) => {
        console.log(error);
    });
  }
}
