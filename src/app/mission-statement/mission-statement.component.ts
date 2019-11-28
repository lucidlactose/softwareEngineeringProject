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
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}


