import { Directive, ElementRef, Input } from '@angular/core';

enum ValueType {
  SUCCESS = 'success',
  ERROR = 'error',
}

enum Color {
  BLUE = 'rgb(16, 16, 221)',
  RED = 'rgb(231, 15, 15)',
}

@Directive({
  selector: '[appHighlightValue]'
})
export class HighlightValueDirective {

  @Input() public set appHighlightValue(value: number) {
    const valueType: ValueType = value >= 0 ? ValueType.SUCCESS : ValueType.ERROR;

    this.highlight(valueType);
  }

  constructor(private element: ElementRef) { }

  private highlight(valueType: ValueType): void {
    switch (valueType) {
      case ValueType.SUCCESS:
        this.element.nativeElement.style.color = Color.BLUE;
        this.element.nativeElement.style.borderColor = Color.BLUE;

        break;
      case ValueType.ERROR:
        this.element.nativeElement.style.color = Color.RED;
        this.element.nativeElement.style.borderColor = Color.RED;

        break;
    }
  }
}
