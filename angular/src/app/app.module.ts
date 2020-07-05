import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import {WorkoutifierModule} from "./workoutifier/workoutifier.module";

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, WorkoutifierModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
