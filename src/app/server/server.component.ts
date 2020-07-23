import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  disabled = true;
  constructor() {
    setTimeout(() => {
      // document.getElementById('myBtn').disabled = disabled;
      this.disabled = false;
    }, 2000);
  }

  clickMe = (event: Event) => {
    // alert('click me');
    console.log(event);
    console.log(event.target);
    (event.target as HTMLElement).parentElement.nextElementSibling.setAttribute('style', 'display: block;');
  }

  ngOnInit(): void {
  }

}
