import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IItem } from '../../models/fruit.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../../states/app.state';
import { selectCartItems } from '../../../states/cart/cart.selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fruit-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fruit-card.component.html',
  styleUrl: './fruit-card.component.scss',
})
export class FruitCardComponent {
  cartItems$ = this.store.select(selectCartItems);
  @Input() fruitData!: IItem;
  @Output() handleAdd = new EventEmitter();

  constructor(private store: Store<AppState>) {}

  addToCart(product: IItem) {
    this.handleAdd.emit(product);
  }
}
