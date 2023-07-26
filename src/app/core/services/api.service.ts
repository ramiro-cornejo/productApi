import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interface/product.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
