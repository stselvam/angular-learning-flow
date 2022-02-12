import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormWithCustomvalidationComponent } from './demo-form-with-customvalidation.component';

describe('DemoFormWithCustomvalidationComponent', () => {
  let component: DemoFormWithCustomvalidationComponent;
  let fixture: ComponentFixture<DemoFormWithCustomvalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoFormWithCustomvalidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormWithCustomvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
