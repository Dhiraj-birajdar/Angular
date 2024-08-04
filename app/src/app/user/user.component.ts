import { Component } from '@angular/core';
interface User {
  uid: number;
  email: string;
  password: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  // users: any[] = []
  // user = {
  //   userId: null,
  //   email: '',
  //   password: ''
  // }
  // flag = false;

  // print() {
  //   this.flag = !this.flag;
  //   this.users.push({ ...this.user });

  users: User[] = [
    { uid: 1, email: 'abc@mail.com', password: 'pass1' },
    { uid: 2, email: 'ijk@mail.com', password: 'pass2' },
    { uid: 3, email: 'pqr@mail.com', password: 'pass3' },
    { uid: 4, email: 'xyz@mail.com', password: 'pass4' }
  ];
}
