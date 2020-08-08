import { EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';

import { Account } from '../service-tutorial.component';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  @Input('account') account: Account;
  @Input('accTypes') accountTypes: string[];

  @Output('accountController') accController = new EventEmitter<{newAccount: Account }>();

  accName: string;
  accType: string;


  constructor() { }

  ngOnInit(): void {
  }

  createAccount(): void {
    // console.log(this.accName + ' ' + this.accType);
    this.account = new Account(this.accName, this.accType);
    // console.log(this.accounts);

    this.accController.emit({ newAccount: this.account });
  }
}
