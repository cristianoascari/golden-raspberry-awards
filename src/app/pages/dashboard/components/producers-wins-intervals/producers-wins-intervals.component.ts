import { Component, OnInit } from '@angular/core';

import { IProducerWinsIntervalMaxMin } from 'src/app/shared/models/movie.model';

import { MoviesService } from 'src/app/shared/services/movies/movies.service';

@Component({
  selector: 'app-producers-wins-intervals',
  templateUrl: './producers-wins-intervals.component.html',
  styleUrls: ['./producers-wins-intervals.component.scss']
})
export class ProducersWinsIntervalsComponent implements OnInit {
  public isLoading: boolean = true;
  public intervalData: IProducerWinsIntervalMaxMin | undefined;

  constructor(private moviesService: MoviesService) {}

  public ngOnInit(): void {
    this.getProducersIntervalBetweenWinners();
  }

  private getProducersIntervalBetweenWinners(): void {
    this.isLoading = true;

    const queryParams: string = 'projection=max-min-win-interval-for-producers';

    this.moviesService.get(queryParams).subscribe((response: any) => {
      this.intervalData = response ?? [];

      this.isLoading = false;
    });
  }
}
