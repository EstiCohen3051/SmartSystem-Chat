import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeSystemComponent } from './change-system.component';

describe('ChangeSystemComponent', () => {
  let component: ChangeSystemComponent;
  let fixture: ComponentFixture<ChangeSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
