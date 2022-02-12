import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormWithValidationsexplicitComponent } from './demo-form-with-validationsexplicit.component';

describe('DemoFormWithValidationsexplicitComponent', () => {
  let component: DemoFormWithValidationsexplicitComponent;
  let fixture: ComponentFixture<DemoFormWithValidationsexplicitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoFormWithValidationsexplicitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormWithValidationsexplicitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
