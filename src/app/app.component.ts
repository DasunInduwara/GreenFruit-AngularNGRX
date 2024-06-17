import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FruitsComponent } from './fruits/fruits.component';
import { CartComponent } from './cart/cart.component';
import { Observable } from 'rxjs';
import { IItem } from './shared/models/fruit.interface';
import { AppState } from './states/app.state';
import { Store } from '@ngrx/store';
import { selectCartItems } from './states/cart/cart.selector';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FruitsComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fruit_store';
  fruits$: Observable<IItem[]>;

  constructor (private store : Store<AppState>){
    this.fruits$ = this.store.select(selectCartItems)
  }
}
