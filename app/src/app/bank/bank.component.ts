import { Component } from '@angular/core';
interface BankAccount {
  acct_no: number;
  acct_name: string;
  balance: number;
  bank_name: string;
}
@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent {

  bankAccounts: BankAccount[] = [
    { acct_no: 1001, acct_name: 'John Doe', balance: 5000, bank_name: 'Bank A' },
    { acct_no: 1002, acct_name: 'Jane Smith', balance: 10000, bank_name: 'Bank B' },
    { acct_no: 1003, acct_name: 'Alice Johnson', balance: 7500, bank_name: 'Bank C' },
    { acct_no: 1004, acct_name: 'Bob Brown', balance: 3000, bank_name: 'Bank D' }
  ];
}
