import { Component } from '@angular/core';
import { Device } from '@glever/workoutifier-model';

@Component({
  selector: 'app-root',
  template: `
    <app-workoutifier></app-workoutifier>
  `
})
export class AppComponent {
  private device: Device;
}
