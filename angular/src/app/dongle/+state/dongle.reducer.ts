import { createReducer, on } from '@ngrx/store';
import { getStatusResponse } from './dongle.actions';

export const DONGLE_STATE_KEY = 'dongle';

export interface DongleState {
  status: 'unknown' | 'connected' | 'disconnected';
}

export const initialState: DongleState = {
  status: 'unknown'
};

const _dongleReducer = createReducer(
  initialState,
  on(getStatusResponse, (state, status) => status)
);

export function dongleReducer(state, action) {
  return _dongleReducer(state, action);
}
