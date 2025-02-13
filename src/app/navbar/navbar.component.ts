import { CartService } from './../services/cart/cart.service';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  cartCount = 0;

  constructor(private cartService: CartService) {
    this.cartService.cartCount$.subscribe((count) => {
      this.cartCount = count;
    });
  }
}
