import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { selectCartItems } from '../states/cart/cart.selector';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartItems$ = this.store.select(selectCartItems);
  constructor(private store: Store<AppState>) {}
}
