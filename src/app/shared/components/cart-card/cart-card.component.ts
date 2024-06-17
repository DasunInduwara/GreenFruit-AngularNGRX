import { Component, Input } from '@angular/core';
import { IItem } from '../../models/fruit.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../../states/app.state';
import {
  quantityDecrement,
  quantityIncrement,
  removeItem,
} from '../../../states/cart/cart.action';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.scss',
})
export class CartCardComponent {
  @Input() item!: IItem;
  constructor(private store: Store<AppState>) {}

  handleIncrement(itemId: number) {
    this.store.dispatch(quantityIncrement({ itemId }));
  }
  handleDecrement(itemId: number) {
    this.store.dispatch(quantityDecrement({ itemId }));
  }
  handleItemRemove(itemId: number) {
    this.store.dispatch(removeItem({ itemId }));
  }
}
