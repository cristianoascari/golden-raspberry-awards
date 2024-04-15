import { Component, OnInit } from '@angular/core';

import { IYearMultipleWinners } from '../../../../shared/models/movie.model';

import { MoviesService } from '../../../../shared/services/movies/movies.service';

@Component({
  selector: 'app-years-with-multiple-winners',
  templateUrl: './years-with-multiple-winners.component.html',
  styleUrls: ['./years-with-multiple-winners.component.scss']
})
export class YearsWithMultipleWinnersComponent implements OnInit {
  public isLoading: boolean = true;
  public yearsList: IYearMultipleWinners[] = [];

  constructor(private moviesService: MoviesService) {}

  public ngOnInit(): void {
    this.getYearsWithMultipleWinners();
  }

  private getYearsWithMultipleWinners(): void {
    this.isLoading = true;

    const queryParams: string = 'projection=years-with-multiple-winners';

    this.moviesService.get(queryParams).subscribe((response: any) => {
      this.yearsList = response?.years ?? [];
      this.isLoading = false;
    });
  }
}
