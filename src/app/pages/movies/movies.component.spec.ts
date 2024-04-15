import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { EWinnerMovie } from '../../shared/models/filter.model';
import { MoviesComponent } from './movies.component';

import { LoaderComponent } from '../../shared/components/loader/loader.component';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  let mockApiResult: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesComponent, LoaderComponent],
      imports:  [RouterTestingModule, HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    mockApiResult = [{
      id: 1,
      producers: ['Producer A'],
      studios: ['Studio A'],
      title: 'Movie A',
      winner: true,
      year: 2019
    }]
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllMovies method on ngOnInit method', () => {
    const spy = jest.spyOn(component as any, 'getAllMovies');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should call filterMoviesByWinner method', () => {
    const spy = jest.spyOn(component as any, 'filterMoviesByWinner');
    component.filterMoviesByWinner();
    expect(spy).toHaveBeenCalled();
  });

  it('should call filterMoviesByYear method', () => {
    const spy = jest.spyOn(component as any, 'filterMoviesByYear');
    component.filterMoviesByYear();
    expect(spy).toHaveBeenCalled();
  });

  it('should call searchMovies method', () => {
    const spy = jest.spyOn(component as any, 'searchMovies');
    component['searchMovies']('query');
    expect(spy).toHaveBeenCalled();
  });

  it('should call searchMovies method with query params', fakeAsync(() => {
    const spy = jest.spyOn(component['moviesService'], 'get').mockReturnValue(of(mockApiResult));
    component['searchMovies']('query');
    expect(spy).toHaveBeenCalledWith('query');
  }));

  it('should call getQueryParams method', () => {
    const spy = jest.spyOn(component as any, 'getQueryParams');
    component['getQueryParams']();
    expect(spy).toHaveBeenCalled();
  });

  it('should call getQueryParams method with fullSearch false', () => {
    const spy = jest.spyOn(component as any, 'getQueryParams');
    component['getQueryParams'](false);
    expect(spy).toHaveBeenCalled();
  });

  it('should call getPageNumberParam method', () => {
    const spy = jest.spyOn(component as any, 'getPageNumberParam');
    component['getPageNumberParam']();
    expect(spy).toHaveBeenCalled();
  });

  it('should call getPageSizeParam method', () => {
    const spy = jest.spyOn(component as any, 'getPageSizeParam');
    component['getPageSizeParam']();
    expect(spy).toHaveBeenCalled();
  });

  it('should call getWinnerParam method', () => {
    component.winnerFilter = EWinnerMovie.YESNO;
    const spy = jest.spyOn(component as any, 'getWinnerParam');
    component['getWinnerParam']();
    expect(spy).toHaveBeenCalled();
  });

  it('should call getWinnerParam method with winnerFilter YES', () => {
    component.winnerFilter = EWinnerMovie.YES;
    const spy = jest.spyOn(component as any, 'getWinnerParam');
    component['getWinnerParam']();
    expect(spy).toHaveBeenCalled();
  });

  it('should call getWinnerParam method with winnerFilter NO', () => {
    component.winnerFilter = EWinnerMovie.NO;
    const spy = jest.spyOn(component as any, 'getWinnerParam');
    component['getWinnerParam']();
    expect(spy).toHaveBeenCalled();
  });

  it('should call getYearParam method', () => {
    const spy = jest.spyOn(component as any, 'getYearParam');
    component['getYearParam']();
    expect(spy).toHaveBeenCalled();
  });

  it('should call getYearParam method with yearFilter length 4', () => {
    component.yearFilter = 2019;
    const spy = jest.spyOn(component as any, 'getYearParam');
    component['getYearParam']();
    expect(spy).toHaveBeenCalled();
  });

  it('should call getYearParam method with yearFilter length 0', () => {
    component.yearFilter = null;
    const spy = jest.spyOn(component as any, 'getYearParam');
    component['getYearParam']();
    expect(spy).toHaveBeenCalled();
  });

  it('should call changePage method', () => {
    const spy = jest.spyOn(component as any, 'changePage');
    component.changePage(1);
    expect(spy).toHaveBeenCalled();
  });
});
