import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductType } from '../../types/product-type';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<
    { product: ProductType; quantity: number }[]
  >([]);
  cartItems$ = this.cartItemsSubject.asObservable();
  private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable();

  constructor() {
    this.initializeCart();
  }

  private initializeCart() {
    const storedCart = this.getStoredCart();
    this.cartItemsSubject.next(storedCart);
    this.updateCartCount(storedCart);
  }

  addToCart(product: ProductType) {
    let cart = this.getStoredCart();
    const existingItem = cart.find(
      (item: { product: { id: number } }) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ product, quantity: 1 });
    }
    this.storeCart(cart);
    this.cartItemsSubject.next(cart);
    this.updateCartCount(cart);
  }

  getStoredCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }

  private storeCart(cart: any[]) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  updateCartCount(cart: any[]) {
    const totalCount = cart.reduce((count, item) => count + item.quantity, 0);
    this.cartCount.next(totalCount);
  }
}
