import { createFeatureSelector } from '@ngrx/store';
import { Goal } from 'src/app/domain/entity/goal.interface';
import { GoalState } from 'src/app/presentation/state/goal.state';
import { createSelector } from '@ngrx/store/src/selector';


// const selectFeature = (state: GoalState) => state;
const selectFeature = createFeatureSelector<GoalState>('goal');

export const GoalSelectors = {
    select: selectFeature
}