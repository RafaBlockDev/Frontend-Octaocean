import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { ButtonCardTableGroup } from '../../models/button-card-table-group';

@Component({
  selector: 'app-button-card-table-group',
  templateUrl: './button-card-table-group.component.html',
  styleUrls: ['./button-card-table-group.component.css']
})
export class ButtonCardTableGroupComponent implements OnInit, OnDestroy {

  @Input()
  cards!: ButtonCardTableGroup;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }
}
