import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interface/product.interface';
// Service para obtener datos de la API
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-product-pages',
  templateUrl: './product-pages.component.html',
  styleUrls: ['./product-pages.component.scss']
})
export class ProductPagesComponent implements OnInit{
  products: Product[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe({
      next: res => {
        this.products = res;
      }
    })
  }

}


