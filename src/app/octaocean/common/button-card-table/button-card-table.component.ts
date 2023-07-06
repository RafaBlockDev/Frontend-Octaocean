import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { ButtonCardTable } from '../../models/button-card-table';

@Component({
  selector: 'app-button-card-table',
  templateUrl: './button-card-table.component.html',
  styleUrls: ['./button-card-table.component.css']
})
export class ButtonCardComponent implements OnInit, OnDestroy {

  @Input()
  cardProps!: ButtonCardTable;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }
}