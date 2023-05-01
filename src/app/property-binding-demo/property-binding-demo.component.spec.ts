import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBindingDemoComponent } from './property-binding-demo.component';

describe('PropertyBindingDemoComponent', () => {
  let component: PropertyBindingDemoComponent;
  let fixture: ComponentFixture<PropertyBindingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyBindingDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyBindingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
