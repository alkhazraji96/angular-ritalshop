import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProductState, productsFeatureKey, selectAll } from './product.reducer';

export const selectProductState = createFeatureSelector<ProductState>(
  productsFeatureKey
)

export const selectProducts = createSelector(selectProductState, selectAll )