import { ActionReducerMap } from '@ngrx/store';

import { CountState, counterReducer, coundNode } from './counter.reducer';

export interface State {
    [coundNode]: CountState;
}

export const reducers: ActionReducerMap<State> = {
    [coundNode]: counterReducer,
};

