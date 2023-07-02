import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OptimalTeacherComponent } from './optimal-teacher.component';

describe('OptimalTeacherComponent', () => {
  let component: OptimalTeacherComponent;
  let fixture: ComponentFixture<OptimalTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptimalTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptimalTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
