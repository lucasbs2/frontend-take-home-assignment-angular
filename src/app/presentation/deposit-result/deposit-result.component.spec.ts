import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { DepositResultComponent } from './deposit-result.component';
import { GoalState } from 'src/app/presentation/state/goal.state';
import * as moment from 'moment';

describe('DepositResultComponent', () => {
  let component: DepositResultComponent;
  let fixture: ComponentFixture<DepositResultComponent>;
  const initialState : GoalState = { 
      goal: {
        totalAmount: 100,
        date: moment()
      },
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositResultComponent ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
