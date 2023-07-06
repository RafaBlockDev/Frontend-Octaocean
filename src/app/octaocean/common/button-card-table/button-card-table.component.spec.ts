import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCardComponent } from './button-card-table.component';

describe('ButtonCardComponent', () => {
  let component: ButtonCardComponent;
  let fixture: ComponentFixture<ButtonCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonCardComponent]
    });
    fixture = TestBed.createComponent(ButtonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
