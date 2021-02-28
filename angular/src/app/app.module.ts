import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { WorkoutifierModule } from './workoutifier/workoutifier.module';
import { SharedModule } from './shared/shared.module';
import { DongleModule } from './dongle/dongle.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    SharedModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    }),
    WorkoutifierModule,
    DongleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
