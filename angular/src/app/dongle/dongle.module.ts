import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DongleComponent } from './dongle/dongle.component';
import { StoreModule } from '@ngrx/store';
import { DONGLE_STATE_KEY, dongleReducer } from './+state/dongle.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DongleEffects } from './+state/dongle.effects';

@NgModule({
  declarations: [DongleComponent],
  exports: [DongleComponent],
  imports: [
    StoreModule.forFeature(DONGLE_STATE_KEY, dongleReducer),
    EffectsModule.forFeature([DongleEffects]),
    CommonModule
  ]
})
export class DongleModule {}
