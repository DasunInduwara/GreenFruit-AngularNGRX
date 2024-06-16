import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ApiService } from '../shared/service/api.service';
import { FruitCardComponent } from '../shared/components/fruit-card/fruit-card.component';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [AsyncPipe, CommonModule, FruitCardComponent],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.scss',
})
export class FruitsComponent {
  apiService = inject(ApiService);
  fruits$ = this.apiService.getFruits();
}
