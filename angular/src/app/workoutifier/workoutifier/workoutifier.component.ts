import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workoutifier',
  template: `
    <app-messaging></app-messaging>
    <app-dongle></app-dongle>
  `,
  styles: [
  ]
})
export class WorkoutifierComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
