import { Component, OnInit } from '@angular/core';
import { GoalState } from 'src/app/presentation/state/goal.state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { GoalResult } from 'src/app/domain/entity/goal-result.interface';
import { GoalSelectors } from 'src/app/presentation/state/goal.selector';

@Component({
  selector: 'deposit-result',
  templateUrl: './deposit-result.component.html',
  styleUrls: ['./deposit-result.component.scss']
})
export class DepositResultComponent implements OnInit {

  $state : Observable<GoalState>;

  constructor(private store: Store<GoalState>) { }

  ngOnInit(): void {
    this.$state = this.store.pipe(select(GoalSelectors.select));
  }

}
