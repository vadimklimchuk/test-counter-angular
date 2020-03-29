import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { CounterActionType, IncrementAction, DecrementAction } from '../actions/counter.actions';

@Injectable()
export class CounterEffects {

    constructor(private actions: Actions) {}

    @Effect()
    public getCounter$: Observable<IncrementAction | DecrementAction> = this.actions
        .pipe(
            ofType<Action>(CounterActionType.CHANGE),
            switchMap(() => [ new IncrementAction(), new DecrementAction(), new DecrementAction() ])
        );
}
