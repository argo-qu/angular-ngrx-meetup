import {createReducer, on} from '@ngrx/store';
import {initialState} from '../initial-state';
import {DemoOptionsState} from '../state/demo-options.state';
import {setEffectsState} from '../actions';

export const demoOptionsReducer = createReducer<DemoOptionsState>(
  initialState.demoOptions,
  on(setEffectsState, (state, {enableEffects}) => ({
    ...state,
    enableEffects
  }))
);
