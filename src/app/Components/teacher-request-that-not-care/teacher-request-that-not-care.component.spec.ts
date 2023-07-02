import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherRequestThatNotCareComponent } from './teacher-request-that-not-care.component';

describe('TeacherRequestThatNotCareComponent', () => {
  let component: TeacherRequestThatNotCareComponent;
  let fixture: ComponentFixture<TeacherRequestThatNotCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherRequestThatNotCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherRequestThatNotCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
