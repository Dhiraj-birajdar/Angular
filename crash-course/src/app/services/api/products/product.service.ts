import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductRepresentation } from '../model/product-representation';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string = "https://fakestoreapi.com/";

  constructor(private http: HttpClient) { }

  getProductsWithLimit(limit: number = 5): Observable<Array<ProductRepresentation>> {
    const productsUrl: string = `${this.baseUrl}products?limit=${limit}`;
    return this.http.get<Array<ProductRepresentation>>(productsUrl);
  }

  createProduct(product: ProductRepresentation) {
    const productsUrl = `${this.baseUrl}products`;
    return this.http.post<ProductRepresentation>(productsUrl, product);
  }
}
