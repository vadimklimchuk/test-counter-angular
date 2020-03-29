import { NgModule } from '@angular/core';

import { ValueComponent } from './components/value/value.component';
import { HighlightValueDirective } from './directives/highlight-value.directive';

@NgModule({
  declarations: [
    ValueComponent,
    HighlightValueDirective
  ],
  imports: [ ],
  exports: [
    ValueComponent
  ]
})
export class SharedModule { }
