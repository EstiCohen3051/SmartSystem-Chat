import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemFillingComponent } from './system-filling.component';

describe('SystemFillingComponent', () => {
  let component: SystemFillingComponent;
  let fixture: ComponentFixture<SystemFillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemFillingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemFillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
