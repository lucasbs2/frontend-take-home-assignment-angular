import { createReducer, on } from '@ngrx/store';
import { GoalState } from 'src/app/presentation/state/goal.state';
import * as moment from 'moment';
import { GoalActions } from 'src/app/presentation/state/goal.actions';
import { State } from '@ngrx/store/src/state';

const initialState : GoalState = {
    goal: {
        date: moment(),
        totalAmount: 1500,
    }
};

export const goalReducer = createReducer<GoalState>(initialState,
    on(GoalActions.updateGoal, (state, { goal }) => ({ ...state, goal: goal, error: null })),
    on(GoalActions.onCalculateResultSucceeded, (state, { result }) => ({ ...state, result: result })),
    on(GoalActions.onCalculateResultFailed, (state, { err }) => ({ ...state, error: err })),
);
