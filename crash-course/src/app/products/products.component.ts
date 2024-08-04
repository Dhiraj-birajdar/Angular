import { Component, OnInit } from '@angular/core';
import { ProductRepresentation } from '../services/api/model/product-representation';
import { ProductService } from '../services/api/products/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: ProductRepresentation[] = [];

  ngOnInit(): void {
    const product: ProductRepresentation = {
      title: 'my product',
      description: 'some descripton',
      price: 32,
      category: 'electronic',
      image: 'http://image.jpg'
    }

    this.service.getProductsWithLimit()
      .subscribe({
        next: (data) => {
          this.products = data;
        }
      });

    // this.service.createProduct(product)
    //   .subscribe({
    //     next: (result) => {
    //       console.log(result);
    //     },
    //     error: (err: any) => {
    //       console.log(err.message);
    //       if (err instanceof ErrorEvent) {
    //         console.error('client side error' + err.error.message);
    //       } else {
    //         console.error('server side error' + err.error.message);

    //       }
    //     }
    //   });
  }

  constructor(private service: ProductService) {

  }
}
