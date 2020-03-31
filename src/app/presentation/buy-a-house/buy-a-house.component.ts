import { Component, OnInit, HostListener } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Goal } from 'src/app/domain/entity/goal.interface';
import { GoalState } from 'src/app/presentation/state/goal.state';
import { Observable } from 'rxjs';
import { GoalSelectors } from 'src/app/presentation/state/goal.selector';
import * as moment from 'moment';
import { GoalActions } from 'src/app/presentation/state/goal.actions';

@Component({
  selector: 'buy-a-house',
  templateUrl: './buy-a-house.component.html',
  styleUrls: ['./buy-a-house.component.scss']
})
export class BuyAHouseComponent implements OnInit {

  totalAmount: number;
  now = moment();
  month: moment.Moment;

  disableDecrease = true;
  private preventKeyChanges = false;
  
  constructor(private store : Store<GoalState>) {
      
  }

  ngOnInit(): void {
    this.month = this.now.clone();
    this.calculate(0);
  }

  onFormChanged() {
    this.calculate(this.totalAmount);
  }

  increaseMonth() {
    this.updateMonth(1);
  }

  decreaseMonth() {
    this.updateMonth(-1);
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (this.preventKeyChanges) return;
    let a = event;
    if (event.keyCode === 39) {
      this.increaseMonth();
    }

    if (event.keyCode === 37) {
      this.decreaseMonth();
    }
  }
  

  onTotalAmountFocus() {
      this.preventKeyChanges = true;
  }

  onTotalAmountBlur() {
    this.preventKeyChanges = false;
  }

  private updateMonth(amount: number) {
    const date = this.month.clone().add(amount, 'month');
    this.month = moment.max(this.now, date);
  
    this.calculate(this.totalAmount);
    this.disableDecrease = this.month.isSame(this.now);
    
  }

  private calculate(amount: number) {
    const goal : Goal = {
      totalAmount: amount,
      date: this.month
    };
    this.store.dispatch(GoalActions.updateGoal({ goal: goal}));
  }

}
