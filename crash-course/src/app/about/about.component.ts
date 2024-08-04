import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/model/product-representation';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  username: any;
  course: any;

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.params['username'];
    this.course = this.activatedRoute.snapshot.queryParams['course'];

  }

  constructor(private activatedRoute: ActivatedRoute) {

  }

}
