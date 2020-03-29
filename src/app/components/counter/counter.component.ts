import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable, interval, Subscription } from 'rxjs';

import { BaseClass } from 'src/app/shared/base/base.class';
import { CountState } from 'src/app/store/reducers/counter.reducer';
import { ChangeAction, ResetAction } from 'src/app/store/actions/counter.actions';
import { selectFirstValue, selectSecondValue } from 'src/app/store/selector/counter.selector';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent extends BaseClass {
  public firstValue$: Observable<number> = this.store$.pipe(select(selectFirstValue));
  public secondValue$: Observable<number> = this.store$.pipe(select(selectSecondValue));

  public isEnabledStart: boolean = true;

  public intervalSubscription: Subscription;

  public count$: Observable<number>;

  constructor(private store$: Store<CountState>) { super(); }

  public handleStartClick(): void {
    this.intervalSubscription = interval(1000)
      .subscribe(() => {
        this.store$.dispatch(new ChangeAction());

        this.isEnabledStart = false;
      });

    this.subscribe(this.intervalSubscription);
  }

  public handleStopClick(): void {
    this.isEnabledStart = true;
    this.unsubscribe();
  }

  public handleResetClick(): void {
    this.isEnabledStart = true;
    this.unsubscribe();

    this.store$.dispatch(new ResetAction());
  }
}
