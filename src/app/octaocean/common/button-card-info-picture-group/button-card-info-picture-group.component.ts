import { Component, OnDestroy, OnInit, Input } from '@angular/core';

import { ButtonCardInfoPictureGroup } from '../../models/button-card-info-picture-group';

@Component({
  selector: 'app-button-card-info-picture-group',
  templateUrl: './button-card-info-picture-group.component.html',
  styleUrls: ['./button-card-info-picture-group.component.css']
})
export class ButtonCardInfoPictureGroupComponent implements OnInit, OnDestroy {

  @Input()
  cards!: ButtonCardInfoPictureGroup;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }
}
