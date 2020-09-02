import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product.model';
import { Update } from '@ngrx/entity/src/models';

export const addProduct = createAction(
  '[Product Component] Add Product',
  props<{ product: Product }>()
);

export const updateProduct = createAction(
  '[Product Component] Update Product',
  props<{ product: Update<Product> }>()
);

export const deleteProduct = createAction(
  '[Product Component] Delete Product',
  props<{ id: string }>()
);

export const clearProducts = createAction(
  '[Product Component] Clear Products'
);
