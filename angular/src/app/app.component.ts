import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-messaging></app-messaging>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
