import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WorkoutifierComponent } from './workoutifier.component';

describe('WorkoutifierComponent', () => {
  let component: WorkoutifierComponent;
  let fixture: ComponentFixture<WorkoutifierComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
