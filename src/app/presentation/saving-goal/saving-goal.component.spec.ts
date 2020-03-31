import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { SavingGoalComponent } from './saving-goal.component';
import { GoalState } from 'src/app/presentation/state/goal.state';
import * as moment from 'moment';

describe('SavingGoalComponent', () => {
  let component: SavingGoalComponent;
  let fixture: ComponentFixture<SavingGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
