import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { YearsWithMultipleWinnersComponent } from './years-with-multiple-winners.component';

import { LoaderComponent } from '../../../../shared/components/loader/loader.component';

describe('YearsWithMultipleWinnersComponent', () => {
  let component: YearsWithMultipleWinnersComponent;
  let fixture: ComponentFixture<YearsWithMultipleWinnersComponent>;
  let mockApiResult: any;
  let mockApiFinalResult: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YearsWithMultipleWinnersComponent, LoaderComponent],
      imports:  [RouterTestingModule, HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(YearsWithMultipleWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    mockApiResult = {years:  [{year: 2018, winnerCount: 2}]};
    mockApiFinalResult = [{year: 2018, winnerCount: 2}];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getYearsWithMultipleWinners method', () => {
    const spy = jest.spyOn(component as any, 'getYearsWithMultipleWinners');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should call moviesService.get method', fakeAsync(() => {
    const spy = jest.spyOn(component['moviesService'], 'get').mockReturnValue(of(mockApiResult));
    component['getYearsWithMultipleWinners']();
    tick();
    expect(spy).toHaveBeenCalledWith('projection=years-with-multiple-winners');
    expect(component.yearsList).toEqual(mockApiFinalResult);
    expect(component.isLoading).toBe(false);
  }));
});
