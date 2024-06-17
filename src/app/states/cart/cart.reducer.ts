import { createReducer, on } from '@ngrx/store';
import * as CartAction from './cart.action';
import { IItem } from '../../shared/models/fruit.interface';

export interface CartState {
  fruits: IItem[];
  totalPrice: number;
}

export const initialCartState: CartState = {
  fruits: [],
  totalPrice: 0.0,
};

export function calculateTotalPrice(fruits: IItem[]) {
  return fruits.reduce(
    (total, fruit) => total + fruit.price * fruit.quantity,
    0
  );
}

export const cartReducer = createReducer(
  initialCartState,
  on(CartAction.addToCart, (state, { item }) => {
    const updatedList = [...state.fruits, item];
    return {
      ...state,
      fruits: updatedList,
      totalPrice: calculateTotalPrice(updatedList),
    };
  }),

  on(CartAction.quantityIncrement, (state, { itemId }) => {
    const updatedList = state.fruits.map((item) =>
      item.id === itemId
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );

    return {
      ...state,
      fruits: updatedList,
      totalPrice: calculateTotalPrice(updatedList),
    };
  }),

  on(CartAction.quantityDecrement, (state, { itemId }) => {
    const updatedList = state.fruits.map((item) =>
      item.id === itemId
        ? {
            ...item,
            quantity: item.quantity - 1,
          }
        : item
    );

    return {
      ...state,
      fruits: updatedList,
      totalPrice: calculateTotalPrice(updatedList),
    };
  }),

  on(CartAction.removeItem, (state, { itemId }) => {
    const updatedList = state.fruits.filter((item) => item.id !== itemId);

    return {
      ...state,
      fruits: updatedList,
      totalPrice: calculateTotalPrice(updatedList),
    };
  })
);
