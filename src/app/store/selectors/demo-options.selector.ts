import {createSelector} from '@ngrx/store';
import {AppState} from '../state';
import {DemoOptionsState} from '../state/demo-options.state';

export const demoOptionsFeatureSelector = (state: AppState) => state.demoOptions;

export const selectEffectsEnabled = createSelector(
  demoOptionsFeatureSelector,
  (state: DemoOptionsState) => state.enableEffects
);
