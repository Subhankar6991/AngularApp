import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Account } from '../service-tutorial.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input('accId') id: number;
  @Input('account') account: Account;
  @Input('accTypes') accountTypes: string[];

  // @Output('accountChanged') accountUpdated = new EventEmitter<{ id: number, changedAccount: Account }>();

  newAccount: any;
  constructor() { }

  ngOnInit(): void {

  }

  changeAccountType(accID: number, accTypeID: number): void {
    this.account.accType = this.accountTypes[accTypeID];
    // this.accountUpdated.emit({ id: this.id, changedAccount: this.account });
  }
}
