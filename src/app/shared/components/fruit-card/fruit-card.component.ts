import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IItem } from '../../models/fruit.interface';

@Component({
  selector: 'app-fruit-card',
  standalone: true,
  imports: [],
  templateUrl: './fruit-card.component.html',
  styleUrl: './fruit-card.component.scss',
})
export class FruitCardComponent {
  @Input() fruitData!: IItem;
  @Output() handleAdd = new EventEmitter();

  addToCart(product: IItem) {
    this.handleAdd.emit(product);
  }
}
