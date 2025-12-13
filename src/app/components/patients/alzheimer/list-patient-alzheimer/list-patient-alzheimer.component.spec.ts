import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPatientAlzheimerComponent } from './list-patient-alzheimer.component';

describe('ListPatientAlzheimerComponent', () => {
  let component: ListPatientAlzheimerComponent;
  let fixture: ComponentFixture<ListPatientAlzheimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPatientAlzheimerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPatientAlzheimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
