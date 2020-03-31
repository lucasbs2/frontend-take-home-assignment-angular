export abstract class CalculateError  { }
export class InvalidParamError extends CalculateError {}
export class InvalidDateError extends CalculateError {}
export class InvalidTotalAmountError extends CalculateError {}