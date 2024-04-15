import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { ProducersWinsIntervalsComponent } from './producers-wins-intervals.component';

import { LoaderComponent } from '../../../../shared/components/loader/loader.component';

describe('ProducersWinsIntervalsComponent', () => {
  let component: ProducersWinsIntervalsComponent;
  let fixture: ComponentFixture<ProducersWinsIntervalsComponent>;
  let mockApiResult: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducersWinsIntervalsComponent, LoaderComponent],
      imports:  [RouterTestingModule, HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(ProducersWinsIntervalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    mockApiResult = {
      content: [],
      empty: false,
      first: true,
      last: false,
      number: 1,
      numberOfElements: 100,
      pageable: {
        offset: 10,
        pageNumber: 1,
        pageSize:  10,
        paged: true,
        sort: {empty: false, sorted: false, unsorted: true},
        unpaged: false
      },
      size: 10,
      sort: {empty: false, sorted: false, unsorted: true},
      totalElements: 100,
      totalPages: 10
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getProducersIntervalBetweenWinners method', () => {
    const spy = jest.spyOn(component as any, 'getProducersIntervalBetweenWinners');
    component['getProducersIntervalBetweenWinners']();
    expect(spy).toHaveBeenCalled();
  });

  it('should call moviesService method', () => {
    const spy = jest.spyOn(component['moviesService'], 'get');
    component['getProducersIntervalBetweenWinners']();
    expect(spy).toHaveBeenCalled();
  });

  it('should call moviesService.get with correct query params', () => {
    const spy = jest.spyOn(component['moviesService'], 'get');
    component['getProducersIntervalBetweenWinners']();
    expect(spy).toHaveBeenCalledWith('projection=max-min-win-interval-for-producers');
  });

  it('should call moviesService.get and receive the result', fakeAsync(() => {
    const spy = jest.spyOn(component['moviesService'], 'get').mockReturnValue(of(mockApiResult))
    component['getProducersIntervalBetweenWinners']();
    tick();
    expect(spy).toHaveBeenCalled();
    expect(component.intervalData).toEqual(mockApiResult);
    expect(component.isLoading).toBe(false);
  }));
});
