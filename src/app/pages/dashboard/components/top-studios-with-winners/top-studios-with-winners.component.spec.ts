import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStudiosWithWinnersComponent } from './top-studios-with-winners.component';

describe('TopStudiosWithWinnersComponent', () => {
  let component: TopStudiosWithWinnersComponent;
  let fixture: ComponentFixture<TopStudiosWithWinnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopStudiosWithWinnersComponent]
    });
    fixture = TestBed.createComponent(TopStudiosWithWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
