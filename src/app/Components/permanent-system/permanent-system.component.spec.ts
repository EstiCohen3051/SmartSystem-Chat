import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentSystemComponent } from './permanent-system.component';

describe('PermanentSystemComponent', () => {
  let component: PermanentSystemComponent;
  let fixture: ComponentFixture<PermanentSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermanentSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermanentSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
