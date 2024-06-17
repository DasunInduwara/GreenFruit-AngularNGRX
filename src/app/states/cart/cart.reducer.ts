import { createReducer, on } from '@ngrx/store';
import * as CartAction from './cart.action';
import { IItem } from '../../shared/models/fruit.interface';

export interface CartState {
  fruits: IItem[];
}

export const initialCartState: CartState = {
  fruits: [],
};

export const cartReducer = createReducer(
  initialCartState,
  on(CartAction.addToCart, (state, { item }) => {
    const updatedList = [...state.fruits, item];
    return {
      ...state,
      fruits: updatedList,
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
    };
  }),

  on(CartAction.removeItem, (state, { itemId }) => {
    const updatedList = state.fruits.filter((item) => item.id !== itemId);

    return {
      ...state,
      fruits: updatedList,
    };
  })
);
