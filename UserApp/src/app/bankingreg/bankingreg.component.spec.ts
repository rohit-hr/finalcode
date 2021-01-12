import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingregComponent } from './bankingreg.component';

describe('BankingregComponent', () => {
  let component: BankingregComponent;
  let fixture: ComponentFixture<BankingregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
