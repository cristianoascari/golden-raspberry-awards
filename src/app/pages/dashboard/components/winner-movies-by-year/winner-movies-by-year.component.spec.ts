import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { WinnerMoviesByYearComponent } from './winner-movies-by-year.component';

import { LoaderComponent } from '../../../../shared/components/loader/loader.component'; 

describe('WinnerMoviesByYearComponent', () => {
  let component: WinnerMoviesByYearComponent;
  let fixture: ComponentFixture<WinnerMoviesByYearComponent>;
  let mockApiResult: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WinnerMoviesByYearComponent, LoaderComponent],
      imports:  [
        RouterTestingModule,
        FormsModule,
        HttpClientTestingModule
      ]
    });
    fixture = TestBed.createComponent(WinnerMoviesByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    mockApiResult = [{
      id:  1,
      producers: ['Producer A'],
      studios: ['Studio A'],
      title: 'Movie A',
      winner: true,
      year: 2015
    }]
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call searchWinnerMovieByYear method', () => {
    const spy = jest.spyOn(component as any, 'searchWinnerMovieByYear');
    component.searchWinnerMovieByYear();
    expect(spy).toHaveBeenCalled();
  });

  it ('should not call moviesService.get method if searchYear is not valid', fakeAsync(() => {
    component.searchYear = 201;
    component.searchWinnerMovieByYear();
    expect(component.searchDone).toBe(false);
    expect(component.winnerMovie).toBe(null);
  }));

  it('should call moviesService.get method  with a valid year', fakeAsync(() => {
    const spy = jest.spyOn(component['moviesService'], 'get').mockReturnValue(of(mockApiResult));
    component.searchYear = 2015;
    component.searchWinnerMovieByYear();
    tick();
    expect(spy).toHaveBeenCalledWith('winner=true&year=2015');
    expect(component.winnerMovie).toEqual(mockApiResult[0]);
    expect(component.searchDone).toBe(true);
    expect(component.isLoading).toBe(false);
  }));

  /*it('should call moviesService.get method', fakeAsync(() => {
    const spy = jest.spyOn(component['moviesService'], 'get').mockReturnValue(of([mockApiResult]));
    component.searchYear = 2015;
    component.searchWinnerMovieByYear();
    tick();
    expect(spy).toHaveBeenCalledWith('winner=true&year=2015');
    expect(component.winnerMovie).toEqual(mockApiResult);
    expect(component.searchDone).toBe(true);
    expect(component.isLoading).toBe(false);
  }));*/
});
