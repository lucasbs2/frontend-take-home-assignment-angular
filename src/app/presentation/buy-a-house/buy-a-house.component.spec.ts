import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { BuyAHouseComponent } from './buy-a-house.component';
import { GoalState } from 'src/app/presentation/state/goal.state';
import * as moment from 'moment';

describe('BuyAHouseComponent', () => {
  let component: BuyAHouseComponent;
  let fixture: ComponentFixture<BuyAHouseComponent>;
  const initialState : GoalState = { 
      goal: {
        totalAmount: 100,
        date: moment()
      },
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyAHouseComponent ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyAHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
