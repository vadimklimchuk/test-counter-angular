import { Action } from '@ngrx/store';

export enum CounterActionType {
    INCREMENT = '[COUNTER] Increment',
    DECREMENT = '[COUNTER] Decrement',
    RESET = '[COUNTER] Reset',
    CHANGE = '[COUNTER] Change',
}

export class IncrementAction implements Action {
    readonly type = CounterActionType.INCREMENT;
}

export class DecrementAction implements Action {
    readonly type = CounterActionType.DECREMENT;
}

export class ResetAction implements Action {
    readonly type = CounterActionType.RESET;
}

export class ChangeAction implements Action {
    readonly type = CounterActionType.CHANGE;
}

export type CounterActions = IncrementAction | DecrementAction | ResetAction | ChangeAction;
