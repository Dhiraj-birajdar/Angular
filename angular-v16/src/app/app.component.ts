import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-v16';
  products: any;
  constructor(
    private http: HttpClient
  ) {
    http.get('https://fakestoreapi.com/products?limit=5').subscribe({
      next: data => {
        this.products = data;
        console.log(data);
      }
    })
  }
}
