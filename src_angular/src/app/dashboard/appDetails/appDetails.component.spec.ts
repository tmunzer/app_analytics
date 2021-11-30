import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppDetailsComponent } from './appDetails.component';

describe('appDetailsComponent', () => {
  let component: AppDetailsComponent;
  let fixture: ComponentFixture<AppDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
