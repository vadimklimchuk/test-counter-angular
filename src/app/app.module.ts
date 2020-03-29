import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { ValueComponent } from './shared/components/value/value.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterEffects } from './store/effects/effect.counter';
import { reducers } from './store/reducers';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ValueComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ CounterEffects ]),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
