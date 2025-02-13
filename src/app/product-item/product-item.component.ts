import { Component, Input } from '@angular/core';
import { ProductType } from '../types/product-type';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { StarRatingPipe } from '../pipes/starRating/star-rating.pipe';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-product-item',
  imports: [CurrencyPipe, UpperCasePipe, StarRatingPipe, RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent {
  @Input() productItem!: ProductType;
  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart(this.productItem);
  }
  truncateText(text: string, wordLimit: number): string {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  }
}
