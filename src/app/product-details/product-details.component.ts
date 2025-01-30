import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import productsData from '../../assets/products.json';
import { ProductType } from '../types/product-type';
import { CurrencyPipe } from '@angular/common';
import { StarRatingPipe } from '../pipes/starRating/star-rating.pipe';
import { CalculatePricePipe } from '../pipes/calculatePrice/calculate-price.pipe';

@Component({
  selector: 'app-product-details',
  imports: [HeaderComponent, CurrencyPipe, StarRatingPipe, CalculatePricePipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  @Input() id!: string;
  products = productsData.products.map((prd) => ({
    id: prd.id,
    title: prd.title,
    description: prd.description,
    price: prd.price,
    rating: prd.rating,
    stock: prd.stock,
    thumbnail: prd.thumbnail,
    images: [prd.thumbnail, ...prd.images],
    discountPercentage: prd.discountPercentage,
  }));

  product!: ProductType;
  activeImage!: string;

  ngOnInit() {
    const thePrd = this.products.find((prd) => prd.id === Number(this.id));
    if (thePrd) {
      this.product = thePrd;
      this.activeImage = thePrd.thumbnail;
    } else {
      console.error('Product not found');
    }
  }
  changeImage = (img: string) => {
    this.activeImage = img;
  };
}
