import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducersWinsIntervalsComponent } from './producers-wins-intervals.component';

describe('ProducersWinsIntervalsComponent', () => {
  let component: ProducersWinsIntervalsComponent;
  let fixture: ComponentFixture<ProducersWinsIntervalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducersWinsIntervalsComponent]
    });
    fixture = TestBed.createComponent(ProducersWinsIntervalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
