import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemUploadComponent } from './system-upload.component';

describe('SystemUploadComponent', () => {
  let component: SystemUploadComponent;
  let fixture: ComponentFixture<SystemUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
