import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../states/app.state';
import {
  selectCartItems,
  selectTotalPrice,
} from '../states/cart/cart.selector';
import { CartCardComponent } from '../shared/components/cart-card/cart-card.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CartCardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartItems$ = this.store.select(selectCartItems);
  totalPrice$ = this.store.select(selectTotalPrice);
  constructor(private store: Store<AppState>) {}
}
