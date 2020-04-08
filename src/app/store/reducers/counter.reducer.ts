import { CounterActionType, CounterActions } from '../actions/counter.actions';

export const coundNode = 'counter';

export interface CountState {
    firstValue: number;
    secondValue: number;
}

export const initialState = {
    firstValue: -5,
    secondValue: 10,
};

export const counterReducer = (
    state: CountState = initialState,
    action: CounterActions
): CountState => {
    switch (action.type) {
        case CounterActionType.INCREMENT:
            return {
                ...state,
                firstValue: state.firstValue + 1
            };
        case CounterActionType.DECREMENT:
                return {
                    ...state,
                    secondValue: state.secondValue - 1
                };
        case CounterActionType.RESET:
                return {
                    ...initialState,
                };
        default:
            return state;
    }
};
