import { createAction, props } from '@ngrx/store';
import { DongleState } from './dongle.reducer';

export const getStatusRequest = createAction('[Dongle] GetStatusRequest');
export const getStatusResponse = createAction('[Dongle] GetStatusResponse', props<DongleState>());
