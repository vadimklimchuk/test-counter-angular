import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreModule, Store } from '@ngrx/store';

import { State } from '../../store/reducers';
import { reducers } from 'src/app/store/reducers';
import * as action from '../../store/actions/counter.actions';
import { SharedModule } from 'src/app/shared/shared.module';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let store: Store<State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CounterComponent
      ],
      imports: [
        SharedModule,
        StoreModule.forRoot(reducers),
      ]
    })
    .compileComponents();

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('increment first value afler call Increment action', () => {
    const incrementAction = new action.IncrementAction();
    store.dispatch(incrementAction);

    component.firstValue$.subscribe((value) => {
      expect(value).toEqual(-4);
    });
  });

  it('decrement second value afler call Decrement action', () => {
    const decrementAction = new action.DecrementAction();
    store.dispatch(decrementAction);

    component.secondValue$.subscribe((value) => {
      expect(value).toEqual(9);
    });
  });

  it('decrement second value afler double call Decrement action', () => {
    const decrementAction = new action.DecrementAction();
    store.dispatch(decrementAction);
    store.dispatch(decrementAction);

    component.secondValue$.subscribe((value) => {
      expect(value).toEqual(8);
    });
  });

  it('reset values after call reset action', () => {
    const decrementAction = new action.ResetAction();
    store.dispatch(decrementAction);

    component.firstValue$.subscribe((value) => {
      expect(value).toEqual(-5);
    });
    component.secondValue$.subscribe((value) => {
      expect(value).toEqual(10);
    });
  });
});
