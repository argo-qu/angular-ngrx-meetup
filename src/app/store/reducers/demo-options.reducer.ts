import {createReducer, on} from '@ngrx/store';
import {DemoOptionsState} from '../state/demo-options.state';
import {setEffectsState} from '../actions';
import {demoOptionsInitialState} from '../initial-state';

export const demoOptionsReducer = createReducer<DemoOptionsState>(
  demoOptionsInitialState,
  on(setEffectsState, (state, {enableEffects}) => ({
    ...state,
    enableEffects
  }))
);
