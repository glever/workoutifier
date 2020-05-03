import {Component} from '@angular/core';
import {Device} from '@glever/workoutifier-model'


@Component({
  selector: 'app-root',
  template: `
    <app-messaging></app-messaging>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

  private device: Device;
}
