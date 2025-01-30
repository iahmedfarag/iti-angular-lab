import { Component } from '@angular/core';
import productsData from '../../assets/products.json';
import { HeaderComponent } from '../header/header.component';
import { ProductItemComponent } from '../product-item/product-item.component'; // Path to the JSON file

@Component({
  selector: 'app-products-list',
  imports: [HeaderComponent, ProductItemComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent {
  products = productsData.products.map((prd) => ({
    id: prd.id,
    title: prd.title,
    description: prd.description,
    price: prd.price,
    rating: prd.rating,
    stock: prd.stock,
    thumbnail: prd.thumbnail,
  }));
}
