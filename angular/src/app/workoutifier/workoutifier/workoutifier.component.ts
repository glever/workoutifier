import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workoutifier',
  template: `
    <p>
      workoutifier works!
    </p>
    <app-messaging></app-messaging>
  `,
  styles: [
  ]
})
export class WorkoutifierComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
