import { createAction, props } from '@ngrx/store';
import { Goal } from 'src/app/domain/entity/goal.interface';
import { GoalResult } from 'src/app/domain/entity/goal-result.interface';



const updateGoal = createAction('[Goal] update action', props<{goal: Goal}>());
const onCalculateResultSucceeded = createAction('[Goal] calculate result succeeded action', props<{result: GoalResult}>());
const onCalculateResultFailed = createAction('[Goal] calculate result failed action', props<{err: Error}>());

export const GoalActions = {
    updateGoal : updateGoal,
    onCalculateResultSucceeded: onCalculateResultSucceeded,
    onCalculateResultFailed: onCalculateResultFailed
};
