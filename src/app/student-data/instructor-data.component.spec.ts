import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorDataComponent } from './instructor-data.component';

describe('InstructorDataComponent', () => {
  let component: InstructorDataComponent;
  let fixture: ComponentFixture<InstructorDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
