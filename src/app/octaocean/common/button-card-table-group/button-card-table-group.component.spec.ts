import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCardTableGroupComponent } from './button-card-table-group.component';

describe('ButtonCardTableGroupComponent', () => {
  let component: ButtonCardTableGroupComponent;
  let fixture: ComponentFixture<ButtonCardTableGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonCardTableGroupComponent]
    });
    fixture = TestBed.createComponent(ButtonCardTableGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
