import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatingTeacherComponent } from './updating-teacher.component';

describe('UpdatingTeacherComponent', () => {
  let component: UpdatingTeacherComponent;
  let fixture: ComponentFixture<UpdatingTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatingTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatingTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
