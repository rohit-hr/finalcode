import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackapplicationComponent } from './trackapplication.component';

describe('TrackapplicationComponent', () => {
  let component: TrackapplicationComponent;
  let fixture: ComponentFixture<TrackapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackapplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
