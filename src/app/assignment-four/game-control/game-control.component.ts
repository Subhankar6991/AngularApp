import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  ticks: number = 0;
  trigger: any;
  gameStartedBool: boolean = false;
  @Output() gameController = new EventEmitter<{gameControlTicks: number}>();

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onStart() {
    if (!this.gameStartedBool) {
      // Success ToastrService Called
      this.toastr.success('Have Fun...Enjoy Your Game!', 'Game Started');

      // event emitted by each second using the setInterval method
      this.trigger = setInterval(() => {
        this.ticks += 1;
        console.log(this.ticks);
        this.gameController.emit({gameControlTicks: this.ticks});
      }, 1000);
      this.gameStartedBool = true;
    } else {
      this.toastr.warning('Kindly Stop The Game Then Start Again...', 'Game Has Already Started');
    }
  }

  // onStop the interval is cleared and a toaster service is called
  onStop() {
    this.toastr.error('Opps!! You Have Stopped Your Game', 'Game Stopped')
    clearInterval(this.trigger);
    this.gameStartedBool = false;
  }
}
