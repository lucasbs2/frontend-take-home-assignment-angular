import { UseCase } from "../../../core/use_case.interface";
import { Goal } from "../../entity/goal.interface";
import { Observable } from "rxjs/internal/Observable";
import { Injectable } from '@angular/core';
import { GoalResult } from 'src/app/domain/entity/goal-result.interface';
import { of, throwError } from 'rxjs';
import * as moment from 'moment';
import { isNullOrUndefined, isNumber } from 'util';
import { InvalidTotalAmountError, InvalidParamError, CalculateError, InvalidDateError } from 'src/app/domain/use_case/calculate_goal/calculate-goal-error';

@Injectable({
    providedIn: 'root',
})
export class CalculateGoal implements UseCase<Goal, GoalResult> {
    execute(param: Goal): Observable<GoalResult> {
        const now = moment();

        const error = this.validate(param);
        if (error != null) {
            return throwError(error);
        }

        let monthsAhead = Math.ceil(moment(param.date).diff(moment(now), 'months', true));

        if (monthsAhead < 0) {
            return throwError(new InvalidDateError());
        }
        monthsAhead += 1; // current month will always count

        const result : GoalResult = {
            totalMonths: monthsAhead,
            monthly: param.totalAmount / monthsAhead
        };
        return of(result);
    }

    private validate(param: Goal) : CalculateError {
        if (isNullOrUndefined(param) || isNullOrUndefined(param.date) || isNullOrUndefined(param.totalAmount)) {
            return new InvalidParamError();
        }
        if (!isNumber(param.totalAmount) || param.totalAmount <= 0) {
            return new InvalidTotalAmountError();
        }
        return null;
    }
}

