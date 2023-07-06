import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCardInfoPictureComponent } from './button-card-info-picture.component';

describe('ButtonCardInfoPictureComponent', () => {
  let component: ButtonCardInfoPictureComponent;
  let fixture: ComponentFixture<ButtonCardInfoPictureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonCardInfoPictureComponent]
    });
    fixture = TestBed.createComponent(ButtonCardInfoPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
