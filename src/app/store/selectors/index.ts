import {AppState} from '../state';
import {createSelector} from '@ngrx/store';

export * from './users.selector';
export * from './demo-options.selector';

export const entireStateSelector = (state: AppState) => state;

export const selectEntireState = createSelector(
  entireStateSelector,
  entireStateSelector
);
