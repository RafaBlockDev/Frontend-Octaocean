import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCardInfoGroupComponent } from './button-card-info-group.component';

describe('ButtonCardInfoGroupComponent', () => {
  let component: ButtonCardInfoGroupComponent;
  let fixture: ComponentFixture<ButtonCardInfoGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonCardInfoGroupComponent]
    });
    fixture = TestBed.createComponent(ButtonCardInfoGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
