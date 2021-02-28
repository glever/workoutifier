import { DongleState } from "./dongle.reducer";

export interface AppState {
  dongle: DongleState;
}

export const selectFeature = (state: AppState) => state.dongle;
