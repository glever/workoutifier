import { MessagingState } from "./messaging.reducers";
import { createSelector } from "@ngrx/store";

interface AppState {
  messaging: MessagingState;
}

export const selectFeature = (state: AppState) => state.messaging;
export const selectIsConnected = createSelector(selectFeature, state => state.connectionState === 'connected');
export const selectIsDisConnected = createSelector(selectFeature, state => state.connectionState === 'disconnected');
