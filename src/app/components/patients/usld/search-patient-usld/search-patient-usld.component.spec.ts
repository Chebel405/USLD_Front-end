import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPatientUsldComponent } from './search-patient-usld.component';

describe('SearchPatientUsldComponent', () => {
  let component: SearchPatientUsldComponent;
  let fixture: ComponentFixture<SearchPatientUsldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchPatientUsldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPatientUsldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
