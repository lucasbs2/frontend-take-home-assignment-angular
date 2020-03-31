import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { CalculateGoal } from 'src/app/domain/use_case/calculate_goal/calculate-goal';
import { GoalActions } from 'src/app/presentation/state/goal.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class GoalEffect {
    constructor(
        private actions$: Actions,
        private calculateGoal: CalculateGoal
  ) {}

    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType(GoalActions.updateGoal),
        mergeMap((act) => this.calculateGoal.execute(act.goal).pipe(
                map((result) => GoalActions.onCalculateResultSucceeded({ result: result })),
                catchError((err) => of(GoalActions.onCalculateResultFailed({ err: err })))
            )
        ))
      );
}

