import {createAction, props} from '@ngrx/store';

export const setEffectsState = createAction(
  '[Demo Options] Set effects state',
  props<{ enableEffects: boolean }>()
);
