import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>Welcome to {{ title }}!</h1>`,//inline template ` for multiline string `
  styleUrls: ['./app.component.scss']
  // styles: [`h1 { color: blue;}`] //inline styles
})
export class AppComponent implements OnInit {
  constructor() { }
  role!: string;
  ngOnInit(): void {
    this.role = 'user';
  }
  title = 'hotel_inventory';


  courses = ["java", 'c', 'c++', 'python', 'php'];
}
