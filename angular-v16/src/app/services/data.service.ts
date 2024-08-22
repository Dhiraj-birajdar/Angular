import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: any;
  courses: any;
  msg = 'welcom';
  constructor() {
    this.courses = ['java', 'c', 'c++']
    this.users = [
      {
        uid: 1,
        uname: 'anc',
        pass: 123
      },
      {
        uid: 2,
        uname: 'anc',
        pass: 123
      },
      {
        uid: 3,
        uname: 'anc',
        pass: 123
      },
    ]
  }
  getUserId(id: number) {
    return this.users.find((u: any) => {
      u.uid === id;
    })
  }
  getAllUsers() {
    return this.users;
  }
}
