import { Component, OnInit } from '@angular/core';
import { NewsService } from '../newsservice/news.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bcomp',
  templateUrl: './bcomp.component.html',
  styleUrls: ['./bcomp.component.css']
})
export class BcompComponent implements OnInit {
  constructor(private news: NewsService
    , private http: HttpClient
  ) { }
  new: any;
  articles: any;
  ngOnInit(): void {
    this.news.fetchNews().subscribe((data) => this.new = data);
    this.news.fetchNews().subscribe((data) => {
      this.new = data;
      console.log("------------------" + this.new.articles[0]);
    }
    );

    this.http.get('https://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'apiKey=5c2a449743d6453eb87fa4c108703497').subscribe({
        next: data => {
          this.new = data;
          this.articles = this.new.articles;
          console.log('++++++++++++++++' + this.new.totalResults)
          // console.log('++++++++++++++++' + this.new.articles[0].json)
        }
      })
  }



}
// var url = 'https://newsapi.org/v2/everything?' +
//   'q=Apple&' +
//   'from=2024-08-13&' +
//   'sortBy=popularity&' +
//   'apiKey=5c2a449743d6453eb87fa4c108703497';

// var req = new Request(url);

// fetch(req)
//   .then(function (response) {
//     console.log(response.json());
//   })
