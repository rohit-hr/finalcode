import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingapplicationsComponent } from './pendingapplications.component';

describe('PendingapplicationsComponent', () => {
  let component: PendingapplicationsComponent;
  let fixture: ComponentFixture<PendingapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingapplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
