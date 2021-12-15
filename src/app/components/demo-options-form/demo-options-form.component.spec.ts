import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoOptionsFormComponent } from './demo-options-form.component';

describe('DemoOptionsFormComponent', () => {
  let component: DemoOptionsFormComponent;
  let fixture: ComponentFixture<DemoOptionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoOptionsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoOptionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
