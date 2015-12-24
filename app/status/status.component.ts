import {
  Component,
  EventEmitter,
  Output,
  Input
} from 'angular2/core';

import {CORE_DIRECTIVES} from 'angular2/common';
  
@Component({
  selector: 'status',
  templateUrl: 'app/status/status.component.html',
  directives: [CORE_DIRECTIVES],
  styleUrls: ['app/status/status.component.css'],
  inputs: ['active'],
  outputs: ['change']
})
export class StatusComponent {
  isSelected: boolean;
  active: boolean;
  change: EventEmitter<StatusChangeEvent>;
  constructor() {
    this.change = new EventEmitter<StatusChangeEvent>();
    this.active = true;
    this.isSelected = false;
  }

  onClick() {
    if (!this.active) return;
    this.isSelected = !this.isSelected;
    this.change.next({status: this.isSelected});
  }
}

export interface StatusChangeEvent {
  status: boolean;
}