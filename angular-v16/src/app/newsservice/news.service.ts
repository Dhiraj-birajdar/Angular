import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  api_key = "5c2a449743d6453eb87fa4c108703497";
  constructor(private http: HttpClient) { }
  url = 'https://newsapi.org/v2/everything?' +
    'q=Apple&' +
    'from=2024-08-13&' +
    'sortBy=popularity&' +
    'apiKey=' + this.api_key;
  fetchNews(): Observable<any> {

    return this.http.get(this.url);
  }
}
