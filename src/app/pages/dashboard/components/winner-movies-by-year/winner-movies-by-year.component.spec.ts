import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerMoviesByYearComponent } from './winner-movies-by-year.component';

describe('WinnerMoviesByYearComponent', () => {
  let component: WinnerMoviesByYearComponent;
  let fixture: ComponentFixture<WinnerMoviesByYearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WinnerMoviesByYearComponent]
    });
    fixture = TestBed.createComponent(WinnerMoviesByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
