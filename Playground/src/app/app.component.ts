import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  baseUrl = "http://localhost:8080/"
  staffs: any[] = [{
    "staffId": 0,
    "firstName": "john",
    "lastName": "",
    "role": "default",
    "salary": 0,
    "age": 0,
    "hireDate": ""
  }];
  endPoint: string = '';

  constructor(
    private http: HttpClient
  ) {

  }
  ngOnInit(): void {
    this.http.get(this.baseUrl + this.endPoint).subscribe({
      next: (data) => {
        this.staffs = data as any[];
      }
    });
  }
  title = 'Playground';

  hit() {
    this.http.get(this.baseUrl + this.endPoint).subscribe({
      next: (data) => {
        this.staffs = data as any[];
      }
    });
  }
}
