import { createAction, props } from '@ngrx/store';
import { IFruit, IItem } from '../../shared/models/fruit.interface';

export const addToCart = createAction(
  '[cart component] AddToCart',
  props<{ item: IItem }>()
);

export const quantityIncrement = createAction(
  '[cart component] quantityIncrement',
  props<{ itemId: number }>()
);
export const quantityDecrement = createAction(
  '[cart component] quantityDecrement',
  props<{ itemId: number }>()
);
export const removeItem = createAction(
  '[cart component] removeItem',
  props<{ itemId: number }>()
);
