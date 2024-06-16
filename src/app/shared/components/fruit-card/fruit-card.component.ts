import { Component, Input } from '@angular/core';
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
}
