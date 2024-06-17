import { AppState } from '../app.state';
import { createSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';

export const seletctCartState = (state: AppState) => state.cart;

export const selectCartItems = createSelector(
  seletctCartState,
  (state: CartState) => state.fruits
);
