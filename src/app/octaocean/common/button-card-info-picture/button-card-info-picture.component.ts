import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonCardInfoPicture } from '../../models/button-card-info-picture';

@Component({
  selector: 'app-button-card-info-picture',
  templateUrl: './button-card-info-picture.component.html',
  styleUrls: ['./button-card-info-picture.component.css']
})
export class ButtonCardInfoPictureComponent implements OnInit, OnDestroy {

  @Input()
  cardProps!: ButtonCardInfoPicture;

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    
  }

  clickHandler(evt: any): void {
    this.router.navigateByUrl(evt);
  }
}
