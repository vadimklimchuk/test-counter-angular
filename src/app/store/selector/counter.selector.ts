import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CountState, coundNode } from '../reducers/counter.reducer';

const selectCountFeature = createFeatureSelector<CountState>(coundNode);

export const selectFirstValue = createSelector(
    selectCountFeature,
    (state: CountState): number => state.firstValue
);

export const selectSecondValue = createSelector(
    selectCountFeature,
    (state: CountState): number => state.secondValue
);
