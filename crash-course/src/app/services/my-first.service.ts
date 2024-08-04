import { Injectable } from '@angular/core';

@Injectable({
  // alternatively add service class name in app-modules.ts providers=[MyFirstService] 
  // in module will provide at application startup 
  providedIn: 'root'
})
export class MyFirstService {

  init(): void {
    this.insert({
      name: 'john',
      email: 'john@mail.com',
      message: 'hello'
    });
    this.insert({
      name: 'bob',
      email: 'bob@mail.com',
      message: 'hello'
    });
    this.insert({
      name: 'sam',
      email: 'sam@mail.com',
      message: 'hello'
    });
  }
  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  insert(message: { name: string, email: string, message: string }): void {
    this.messages.push(message);
  }

  getAllMessages(): any[] {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
