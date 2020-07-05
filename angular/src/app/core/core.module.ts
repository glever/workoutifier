import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { WorkoutifierModule } from '../workoutifier/workoutifier.module';

@NgModule({
  declarations: [],
  imports: [BrowserModule, AppRoutingModule, SharedModule, WorkoutifierModule]
})
export class CoreModule {}
