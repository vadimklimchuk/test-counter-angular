import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueComponent } from './value.component';

describe('ValueComponent', () => {
  let component: ValueComponent;
  let fixture: ComponentFixture<ValueComponent>;
  let spanElement: HTMLElement;
  let span: HTMLSpanElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueComponent);
    component = fixture.componentInstance;
    spanElement = fixture.nativeElement;
    span = spanElement.querySelector('span');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain value equal 3', () => {
    component.value = 3;
    fixture.detectChanges();

    expect(span.innerText).toEqual('3');
  });

  it('should contain value equal 0', () => {
    component.value = 0;
    fixture.detectChanges();

    expect(span.innerText).toEqual('0');
  });

  it('should contain empty value', () => {
    component.value = null;
    fixture.detectChanges();

    expect(span.innerText).toEqual('');
  });

  it('should contain value -2', () => {
    component.value = -2;
    fixture.detectChanges();

    expect(span.innerText).toEqual('-2');
  });
});
