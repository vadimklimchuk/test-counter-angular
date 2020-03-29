import { Component, OnInit } from '@angular/core';

import { Observable, interval, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CountState, initialState } from 'src/app/store/reducers/counter.reducer';
import { selectFirstValue, selectSecondValue } from 'src/app/store/selector/counter.selector';
import { ChangeAction } from 'src/app/store/actions/counter.actions';
import { BaseClass } from 'src/app/shared/base/base.class';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent extends BaseClass implements OnInit {
  public firstValue$: Observable<number> = this.store$.pipe(select(selectFirstValue));
  public secondValue$: Observable<number> = this.store$.pipe(select(selectSecondValue));

  public isDisable$: Observable<boolean> = this.store$.pipe(map(counter => counter === initialState));

  public intervalSubscription: Subscription;

  public count$: Observable<number>;

  constructor(private store$: Store<CountState>) { super(); }

  ngOnInit() {
  }

  public handleStartClick() {
    console.log(this.intervalSubscription);
    this.intervalSubscription = interval(1000).subscribe(() => {
      this.store$.dispatch(new ChangeAction());
    });

    this.subscribe(this.intervalSubscription);
  }

  public handleStopClick() {
    this.unsubscribe();
  }

}
