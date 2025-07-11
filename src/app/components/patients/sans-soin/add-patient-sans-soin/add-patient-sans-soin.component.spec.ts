import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientSansSoinComponent } from './add-patient-sans-soin.component';

describe('AddPatientSansSoinComponent', () => {
  let component: AddPatientSansSoinComponent;
  let fixture: ComponentFixture<AddPatientSansSoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPatientSansSoinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPatientSansSoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
