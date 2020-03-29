import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})
export class ValueComponent implements OnInit {

  @Input() public value: number;

  constructor() { }

  ngOnInit() {
  }

}
