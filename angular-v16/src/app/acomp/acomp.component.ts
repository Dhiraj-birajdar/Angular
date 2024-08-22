import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-acomp',
  templateUrl: './acomp.component.html',
  styleUrls: ['./acomp.component.css']
})
export class AcompComponent implements OnInit {

  users: any;
  byid: any;
  constructor(
    private service: DataService
  ) { }
  ngOnInit(): void {
    this.users = this.service.getAllUsers();
    console.log(this.users);
    // this.byid = this.service.getUserId(1);
  }
}
