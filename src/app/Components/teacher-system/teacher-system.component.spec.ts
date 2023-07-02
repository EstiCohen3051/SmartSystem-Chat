import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSystemComponent } from './teacher-system.component';

describe('TeacherSystemComponent', () => {
  let component: TeacherSystemComponent;
  let fixture: ComponentFixture<TeacherSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
