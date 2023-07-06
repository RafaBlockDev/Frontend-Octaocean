import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { InfoSection } from '../../models/info-section';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.css']
})
export class InfoSectionComponent implements OnInit, OnDestroy {

  @Input()
  infoSection!: InfoSection;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }
}
