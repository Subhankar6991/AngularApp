import { Component, OnInit } from '@angular/core';

export class Account {
  accName: string;
  accType: string;
  constructor(accName: string, accType: string) {
    this.accName = accName;
    this.accType = accType;
  }
}

@Component({
  selector: 'app-service-tutorial',
  templateUrl: './service-tutorial.component.html',
  styleUrls: ['./service-tutorial.component.css']
})
export class ServiceTutorialComponent implements OnInit {

  accountTypes: string[] = ['Active', 'Inactive', 'Unknown'];

  accName: string;
  accType: string;
  accounts: Account[] = [];

  constructor() { }

  ngOnInit(): void {
    this.accounts.push(new Account('Master', 'Active'));
    this.accounts.push(new Account('Test','Inactive'));
  }

  onCreateAccount(createdAccount:{ newAccount: Account }): void {
    // console.log(this.accName + ' ' + this.accType);
    // this.accounts.push(new Account(this.accName, this.accType));
    // console.log(this.accounts);
    // console.log(createdAccount.newAccount);
    this.accounts.push(createdAccount.newAccount);
  }

  // changeAccountType(accID: number, accTypeID: number): void {
  //   this.accounts[accID].accType = this.accountTypes[accTypeID];
  // }

  displayLog(): void {
    console.log(this.accounts);
  }
  onAccountChange(updatedAccount: { id: number, changedAccount: Account }): void {
    // this.accounts[updatedAccount.id] = updatedAccount.changedAccount;
  }
}
