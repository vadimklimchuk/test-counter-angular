import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueComponent } from 'src/app/shared/components/value/value.component';
import { CounterComponent } from './counter.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { reducers } from 'src/app/store/reducers';
import { StoreModule } from '@ngrx/store';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
