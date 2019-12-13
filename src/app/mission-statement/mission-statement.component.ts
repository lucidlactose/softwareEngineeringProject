import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission-statement',
  templateUrl: './mission-statement.component.html',
  styleUrls: ['./mission-statement.component.css']
})
export class MissionStatementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  images = [1, 2, 3].map((n) => `../assets/farm${n}.jpg`);

}


