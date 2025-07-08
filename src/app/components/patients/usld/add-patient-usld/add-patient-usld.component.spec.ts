import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientUsldComponent } from './add-patient-usld.component';

describe('AddPatientUsldComponent', () => {
  let component: AddPatientUsldComponent;
  let fixture: ComponentFixture<AddPatientUsldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPatientUsldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPatientUsldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
