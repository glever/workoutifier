import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutifierComponent } from './workoutifier/workoutifier.component';
import { SharedModule } from '../shared/shared.module';
import {MessagingModule} from "../messaging/messaging.module";

@NgModule({
  declarations: [WorkoutifierComponent],
  imports: [SharedModule, MessagingModule],
  exports: [WorkoutifierComponent]
})
export class WorkoutifierModule {}
