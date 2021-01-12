import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenduseridComponent } from './senduserid.component';

describe('SenduseridComponent', () => {
  let component: SenduseridComponent;
  let fixture: ComponentFixture<SenduseridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenduseridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SenduseridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
