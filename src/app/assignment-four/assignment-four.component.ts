import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-four',
  templateUrl: './assignment-four.component.html',
  styleUrls: ['./assignment-four.component.css']
})
export class AssignmentFourComponent implements OnInit {

  gameControlTicks: number;
  constructor() { }

  ngOnInit(): void {
  }

  onGameStarted(gameControlData: { gameControlTicks: number }) {
    this.gameControlTicks = gameControlData.gameControlTicks;
  }
}
