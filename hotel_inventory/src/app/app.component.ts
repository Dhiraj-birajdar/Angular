import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>Welcome to {{ title }}!</h1>`,//inline template ` for multiline string `
  styleUrls: ['./app.component.scss']
  // styles: [`h1 { color: blue;}`] //inline styles
})
export class AppComponent {
  title = 'hotel_inventory';

  role = 'admin';

  courses = ["java", 'c', 'c++', 'python', 'php'];
}
