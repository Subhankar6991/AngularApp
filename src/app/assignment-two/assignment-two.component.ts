import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-two',
  templateUrl: './assignment-two.component.html',
  styleUrls: ['./assignment-two.component.css']
})
export class AssignmentTwoComponent implements OnInit {
  userName = 'Subhankar';
  unameDisabled = true;
  constructor() {   }

  ngOnInit(): void {
  }


  resetUname = () => {
    this.userName = '';
    // this.unameDisabled = false;
  }
}
