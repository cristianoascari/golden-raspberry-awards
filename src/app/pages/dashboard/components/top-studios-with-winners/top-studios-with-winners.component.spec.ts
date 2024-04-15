import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { TopStudiosWithWinnersComponent } from './top-studios-with-winners.component';

import { LoaderComponent } from '../../../../shared/components/loader/loader.component';

describe('TopStudiosWithWinnersComponent', () => {
  let component: TopStudiosWithWinnersComponent;
  let fixture: ComponentFixture<TopStudiosWithWinnersComponent>;
  let mockApiResult: any;
  let mockApiFinalResult: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopStudiosWithWinnersComponent, LoaderComponent],
      imports:  [RouterTestingModule, HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(TopStudiosWithWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    mockApiResult = {
      studios:  [
        {name: 'Studio A', winCount: 4},
        {name: 'Studio B', winCount: 3},
        {name: 'Studio C', winCount: 2},
        {name: 'Studio D', winCount: 1}
      ]
    }

    mockApiFinalResult = [
      {name: 'Studio A', winCount: 4},
      {name: 'Studio B', winCount: 3},
      {name: 'Studio C', winCount: 2}
    ]
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getTopStudiosWithWinners method', () => {
    const spy = jest.spyOn(component as any, 'getTopStudiosWithWinners');
    component['getTopStudiosWithWinners']();
    expect(spy).toHaveBeenCalled();
  });

  it('should call moviesService.get method', fakeAsync(() => {
    const spy = jest.spyOn(component['moviesService'], 'get').mockReturnValue(of(mockApiResult));
    component['getTopStudiosWithWinners']();
    tick();
    expect(spy).toHaveBeenCalledWith('projection=studios-with-win-count');
    expect(component.studiosList).toEqual(mockApiFinalResult);
    expect(component.isLoading).toBe(false);
  }));
});
