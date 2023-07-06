import { Component, OnDestroy, OnInit, Input } from '@angular/core';

import { ButtonCardInfoGroup } from '../../models/button-card-info-group';

@Component({
  selector: 'app-button-card-info-group',
  templateUrl: './button-card-info-group.component.html',
  styleUrls: ['./button-card-info-group.component.css']
})
export class ButtonCardInfoGroupComponent implements OnInit, OnDestroy {

  @Input()
  cards!: ButtonCardInfoGroup;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }
}