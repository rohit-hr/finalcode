import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedapplicationsComponent } from './approvedapplications.component';

describe('ApprovedapplicationsComponent', () => {
  let component: ApprovedapplicationsComponent;
  let fixture: ComponentFixture<ApprovedapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedapplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
