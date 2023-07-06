import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCardInfoPictureGroupComponent } from './button-card-info-picture-group.component';

describe('ButtonCardInfoPictureGroupComponent', () => {
  let component: ButtonCardInfoPictureGroupComponent;
  let fixture: ComponentFixture<ButtonCardInfoPictureGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonCardInfoPictureGroupComponent]
    });
    fixture = TestBed.createComponent(ButtonCardInfoPictureGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
