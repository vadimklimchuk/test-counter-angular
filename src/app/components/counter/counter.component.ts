import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable, Subscription, interval } from 'rxjs';

import { BaseClass } from 'src/app/shared/base/base.class';
import { CountState } from 'src/app/store/reducers/counter.reducer';
import { ResetAction, ChangeAction } from 'src/app/store/actions/counter.actions';
import { selectFirstValue, selectSecondValue } from 'src/app/store/selector/counter.selector';
import { tap } from 'rxjs/operators';


enum CounterState {
  STARTED = 'started',
  STOPPED = 'stopped',
}

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent extends BaseClass {
  public firstValue$: Observable<number> = this.store$.pipe(select(selectFirstValue));
  public secondValue$: Observable<number> = this.store$.pipe(select(selectSecondValue));

  public currentState: CounterState = CounterState.STOPPED;

  public intervalSubscription: Subscription;

  constructor(private store$: Store<CountState>) { super(); }

  public handleStartClick(): void {
    if (this.currentState === CounterState.STARTED) {
      return;
    }

    this.intervalSubscription = interval(1000)
      .pipe(
        tap(() => this.currentState = CounterState.STARTED)
      )
      .subscribe(() => {
        this.store$.dispatch(new ChangeAction());
      });

    this.subscribe(this.intervalSubscription);
  }

  public handleStopClick(): void {
    this.unsubscribe();

    this.currentState = CounterState.STOPPED;
  }

  public handleResetClick(): void {
    this.unsubscribe();

    this.currentState = CounterState.STOPPED;
    this.store$.dispatch(new ResetAction());
  }
}
