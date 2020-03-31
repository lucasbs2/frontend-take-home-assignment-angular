import { TestBed } from '@angular/core/testing';

import { CalculateGoal } from './calculate-goal';
import { InvalidParamError, InvalidTotalAmountError, InvalidDateError } from 'src/app/domain/use_case/calculate_goal/calculate-goal-error';
import { fail } from 'assert';
import * as moment from "moment";

describe('CalculateGoal', () => {
  let service: CalculateGoal;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculateGoal);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  describe("When goal is invalid", () => {
    describe("With null parameters", () => {
      it('Should throw InvalidParamError when param is null',(done) => {
        return service.execute(null).subscribe((data) => {
          fail("Should not call success");
        }, (err) => {
          expect(err).toBeInstanceOf(InvalidParamError);
          done();  
        })
      });
  
      it('Should throw InvalidTotalAmountError when total amount is null',(done) => {
        return service.execute({totalAmount: null, date: moment()}).subscribe((data) => {
          fail("Should not call success");
        }, (err) => {
          expect(err).toBeInstanceOf(InvalidParamError);
          done();  
        })
      });
  
      it('Should throw InvalidDateError when month is null',(done) => {
        return service.execute({totalAmount: -1, date: null}).subscribe((data) => {
          fail("Should not call success");
        }, (err) => {
          expect(err).toBeInstanceOf(InvalidParamError);
          done();  
        })
      });
    });
    
    it('Should throw InvalidTotalAmountError when total amount is zero',(done) => {
      return service.execute({totalAmount: 0, date: moment()}).subscribe((data) => {
        fail("Should not call success");
      }, (err) => {
        expect(err).toBeInstanceOf(InvalidTotalAmountError);
        done();  
      })
    });

    it('Should throw InvalidTotalAmountError when total amount less than zero',(done) => {
      return service.execute({totalAmount: -1, date: moment()}).subscribe((data) => {
        fail("Should not call success");
      }, (err) => {
        expect(err).toBeInstanceOf(InvalidTotalAmountError);
        done();  
      })
    });

    it('Should throw InvalidDateError when date is before now',(done) => {
      return service.execute({totalAmount: 10, date: moment().add(-1, "month")}).subscribe((data) => {
        fail("Should not call success");
      }, (err) => {
        expect(err).toBeInstanceOf(InvalidDateError);
        done();  
      })
    });
  });
  describe("When gaol is valid", ()=> {
    it("Should return expected values with current month", (done) => {
      return service.execute({totalAmount: 10, date: moment()}).subscribe((data) => {
        expect(data).not.toBeNull();
        expect(data.totalMonths).toBe(1);
        expect(data.monthly).toBe(10);
        done();  
      }, fail);
    });

    it("Should return expected values with next month", (done) => {
      return service.execute({totalAmount: 10, date: moment().add(1, "month")}).subscribe((data) => {
        expect(data).not.toBeNull();
        expect(data.totalMonths).toBe(2);
        expect(data.monthly).toBe(5);
        done();  
      }, fail);
    });
  });
});
