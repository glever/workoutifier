import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { WorkoutifierModule } from './workoutifier/workoutifier.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, SharedModule, WorkoutifierModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
