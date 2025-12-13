import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPatientUsldComponent } from './list-patient-usld.component';

describe('ListPatientUsldComponent', () => {
  let component: ListPatientUsldComponent;
  let fixture: ComponentFixture<ListPatientUsldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPatientUsldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPatientUsldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
