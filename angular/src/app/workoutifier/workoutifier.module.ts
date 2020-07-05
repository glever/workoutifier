import { NgModule } from '@angular/core';
import { WorkoutifierComponent } from './workoutifier/workoutifier.component';
import { SharedModule } from '../shared/shared.module';
import { MessagingModule } from '../messaging/messaging.module';
import { SensorsModule } from '../sensors/sensors.module';

@NgModule({
  declarations: [WorkoutifierComponent],
  imports: [SharedModule, MessagingModule, SensorsModule],
  exports: [WorkoutifierComponent]
})
export class WorkoutifierModule {}
