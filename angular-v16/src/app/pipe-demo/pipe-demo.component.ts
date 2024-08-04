import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent {
  title = "predefinedpipe"
  price = 2322;

  persons = [
    {
      name: 'Tony',
      gender: "Male",
      city: 'New York'
    },
    {
      name: 'Hope',
      gender: "Female",
      city: 'LA'
    },
    {
      name: 'Chris',
      gender: "Male",
      city: 'New York'
    },
  ]
}
