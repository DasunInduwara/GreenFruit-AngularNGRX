import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IItem } from '../../models/fruit.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../../states/app.state';
import { selectCartItems } from '../../../states/cart/cart.selector';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';
import { removeItem } from '../../../states/cart/cart.action';

@Component({
  selector: 'app-fruit-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fruit-card.component.html',
  styleUrl: './fruit-card.component.scss',
})
export class FruitCardComponent {
  @Input() fruitData!: IItem;
  @Output() handleAdd = new EventEmitter();
  constructor(private store: Store<AppState>) {}

  public addToCart(product: IItem): void {
    this.handleAdd.emit(product);
  }

  public isInCart(product: IItem): Observable<boolean> {
    return this.store
      .select(selectCartItems)
      .pipe(map((items) => items.some((item) => item.id === product.id)));
  }

  public handleItemRemove(itemId: number): void {
    this.store.dispatch(removeItem({ itemId }));
  }
}
