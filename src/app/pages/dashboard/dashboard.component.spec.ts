import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MoviesService } from '../../shared/services/movies/movies.service';

import { DashboardComponent } from './dashboard.component';

import { ProducersWinsIntervalsComponent } from './components/producers-wins-intervals/producers-wins-intervals.component';
import { TopStudiosWithWinnersComponent } from './components/top-studios-with-winners/top-studios-with-winners.component';
import { WinnerMoviesByYearComponent } from './components/winner-movies-by-year/winner-movies-by-year.component';
import { YearsWithMultipleWinnersComponent } from './components/years-with-multiple-winners/years-with-multiple-winners.component';

import { LoaderComponent } from '../../shared/components/loader/loader.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
  
        ProducersWinsIntervalsComponent,
        TopStudiosWithWinnersComponent,
        WinnerMoviesByYearComponent,
        YearsWithMultipleWinnersComponent,

        LoaderComponent
      ],
      imports:  [
        RouterTestingModule,
        FormsModule,
        HttpClientTestingModule
      ],
      providers: [MoviesService]
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
