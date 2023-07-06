import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCardInfoComponent } from './button-card-info.component';

describe('ButtonCardInfoComponent', () => {
  let component: ButtonCardInfoComponent;
  let fixture: ComponentFixture<ButtonCardInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonCardInfoComponent]
    });
    fixture = TestBed.createComponent(ButtonCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
