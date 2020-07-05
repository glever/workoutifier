import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutifierComponent } from './workoutifier.component';

describe('WorkoutifierComponent', () => {
  let component: WorkoutifierComponent;
  let fixture: ComponentFixture<WorkoutifierComponent>;

  beforeEach(async(() => {
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
