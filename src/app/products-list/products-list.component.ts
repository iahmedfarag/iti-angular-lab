import { Component } from '@angular/core';
import productsData from '../../assets/products.json';
import { HeaderComponent } from '../header/header.component';
import { ProductItemComponent } from '../product-item/product-item.component'; // Path to the JSON file
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products-list',
  imports: [HeaderComponent, ProductItemComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent {
  products: any[] = [];
  currentPage = 1;
  totalPages = 1;
  pageSize = 10;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    const skip = (this.currentPage - 1) * this.pageSize;
    const url = `https://dummyjson.com/products?limit=${this.pageSize}&skip=${skip}`;
    this.http.get<any>(url).subscribe((response) => {
      this.products = response.products;
      this.totalPages = Math.ceil(response.total / this.pageSize);
    });
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.fetchProducts();
    }
  }
}
