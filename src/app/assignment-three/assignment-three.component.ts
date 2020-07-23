import { Component, OnInit } from '@angular/core';

let logID = 0;
class Log {
  logID = 0;
  event: Event;
  date: Date;
  constructor(event: Event, date: Date) {
    logID += 1;
    this.logID = logID;
    this.event = event;
    this.date = date;
  }
}

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.css']
})
export class AssignmentThreeComponent implements OnInit {

  buttonContent = 'Hide Details';
  showDetails = true;
  buttonClickLog = [];
  constructor() { }

  ngOnInit(): void {
  }

  displayDetails = (event: Event) => {
    const log = new Log(event, new Date());
    this.buttonClickLog.push(log);
    if (this.showDetails) {
      this.showDetails = false;
      this.buttonContent = 'Display Details';
    }else {
      this.showDetails = true;
      this.buttonContent = 'Hide Details';
    }
  }
}
