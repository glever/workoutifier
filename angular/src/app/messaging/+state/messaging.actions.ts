import { createAction, props } from '@ngrx/store';
import { StateType } from './messaging.reducers';
import { ApiMsg } from "@glever/workoutifier-model";

export const connectionStateChange = createAction('[Messaging] ConnectionStateChange', props<{ status: StateType }>());

export const messageReceived = createAction('[Messaging] MessageReceived', props<{ message: ApiMsg }>());
