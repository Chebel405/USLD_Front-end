import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPatientSansSoinComponent } from './list-patient-sans-soin.component';

describe('ListPatientSansSoinComponent', () => {
  let component: ListPatientSansSoinComponent;
  let fixture: ComponentFixture<ListPatientSansSoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPatientSansSoinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPatientSansSoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
