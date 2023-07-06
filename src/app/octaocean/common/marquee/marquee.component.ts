import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { MarqueeGroup } from '../../models/marquee-group';

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.css']
})
export class MarqueeComponent implements OnInit, OnDestroy {

  @Input()
  marquees!: MarqueeGroup;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }
}