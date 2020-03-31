import { Goal } from '../../domain/entity/goal.interface';
import { GoalResult } from 'src/app/domain/entity/goal-result.interface';

export interface GoalState {
    goal: Goal;
    result?: GoalResult;
    error?: Error;
}
