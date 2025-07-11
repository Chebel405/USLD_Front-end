import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientAlzheimerComponent } from './add-patient-alzheimer.component';

describe('AddPatientAlzheimerComponent', () => {
  let component: AddPatientAlzheimerComponent;
  let fixture: ComponentFixture<AddPatientAlzheimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPatientAlzheimerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPatientAlzheimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
