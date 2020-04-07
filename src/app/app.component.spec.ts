import { TestBed, async } from '@angular/core/testing';

import { StoreModule } from '@ngrx/store';

import { reducers } from './store/reducers';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CounterComponent } from './components/counter/counter.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CounterComponent,
      ],
      imports: [
        SharedModule,
        StoreModule.forRoot(reducers),
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
