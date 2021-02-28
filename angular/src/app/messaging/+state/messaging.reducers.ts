import { createReducer, on } from '@ngrx/store';
import { connectionStateChange, messageReceived } from './messaging.actions';
import { ApiMsg } from '@glever/workoutifier-model';

export const MESSAGING_STATE_KEY = 'messaging';

export type StateType = 'connected' | 'disconnected';

export interface MessagingState {
  connectionState: StateType;
  latestMessage: ApiMsg;
}

export const initialState: MessagingState = {
  connectionState: 'disconnected',
  latestMessage: null
};

const _messagingReducer = createReducer(
  initialState,
  on(connectionStateChange, (state, { status }) => ({ ...state, connectionState: status })),
  on(messageReceived, (state, { message }) => handleMessage(state, message))
);

export function messagingReducer(state, action) {
  return _messagingReducer(state, action);
}

function handleMessage(state, message: any): MessagingState {
  console.debug(message);
  if (isMessage(message)) {
    return { ...state, latestMessage: message };
  }
  console.debug('Received unknown message type: ' + message);
  return state;
}

function isMessage(obj: any): obj is ApiMsg {
  return true;
}
