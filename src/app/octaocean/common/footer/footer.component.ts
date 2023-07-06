import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Footer } from '../../models/footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  @Input()
  footer!: Footer;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }
}
