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

  public handleIncrement(itemId: number): void {
    this.store.dispatch(quantityIncrement({ itemId }));
  }
  public handleDecrement(itemId: number): void {
    this.store.dispatch(quantityDecrement({ itemId }));
  }
  public handleItemRemove(itemId: number): void {
    this.store.dispatch(removeItem({ itemId }));
  }
}
