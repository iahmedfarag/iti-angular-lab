import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CartService } from '../services/cart/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [HeaderComponent, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
    });
  }

  increaseQuantity(item: { product: any; quantity: number }) {
    item.quantity += 1;
    this.updateStoredCart();
  }

  decreaseQuantity(item: { product: any; quantity: number }) {
    if (item.quantity > 1) {
      item.quantity -= 1;
      this.updateStoredCart();
    } else {
      this.removeItem(item);
    }
  }

  removeItem(item: { product: any; quantity: number }) {
    this.cartItems = this.cartItems.filter(
      (cartItem) => cartItem.product.id !== item.product.id
    );
    this.updateStoredCart();
  }

  private updateStoredCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.cartService.updateCartCount(this.cartItems);
  }

  getTotalQuantity(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0
    );
  }
}
