import { Component, Input, OnInit } from '@angular/core';
import { ProductRepresentation } from '../services/api/model/product-representation';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  @Input()
  product: ProductRepresentation = {};




}