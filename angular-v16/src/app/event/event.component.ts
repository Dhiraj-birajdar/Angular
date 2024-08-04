import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  key!: string;

  keyEvent($event: KeyboardEvent) {

  }

  res!: number;
  add(n1: string, n2: string) {
    this.res = parseInt(n1) + parseInt(n2);
  }
}
