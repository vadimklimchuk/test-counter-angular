import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './store/reducers';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CounterEffects } from './store/effects/effect.counter';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ CounterEffects ]),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
