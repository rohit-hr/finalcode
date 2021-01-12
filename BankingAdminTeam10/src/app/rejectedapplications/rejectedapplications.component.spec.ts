import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedapplicationsComponent } from './rejectedapplications.component';

describe('RejectedapplicationsComponent', () => {
  let component: RejectedapplicationsComponent;
  let fixture: ComponentFixture<RejectedapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedapplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
