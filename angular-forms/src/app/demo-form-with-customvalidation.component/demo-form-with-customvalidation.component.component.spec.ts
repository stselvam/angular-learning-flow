import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormWithCustomvalidation.ComponentComponent } from './demo-form-with-customvalidation.component.component';

describe('DemoFormWithCustomvalidation.ComponentComponent', () => {
  let component: DemoFormWithCustomvalidation.ComponentComponent;
  let fixture: ComponentFixture<DemoFormWithCustomvalidation.ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoFormWithCustomvalidation.ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormWithCustomvalidation.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
