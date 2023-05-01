import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassStyleBindingDemoComponent } from './class-style-binding-demo.component';

describe('ClassStyleBindingDemoComponent', () => {
  let component: ClassStyleBindingDemoComponent;
  let fixture: ComponentFixture<ClassStyleBindingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassStyleBindingDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassStyleBindingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
