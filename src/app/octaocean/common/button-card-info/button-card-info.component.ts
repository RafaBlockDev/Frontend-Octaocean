import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonCardInfo } from '../../models/button-card-info';


@Component({
  selector: 'app-button-card-info',
  templateUrl: './button-card-info.component.html',
  styleUrls: ['./button-card-info.component.css']
})
export class ButtonCardInfoComponent implements OnInit, OnDestroy {

  @Input()
  cardProps!: ButtonCardInfo;

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    
  }

  clickHandler(evt: any): void {
    this.router.navigateByUrl(evt);
  }
}