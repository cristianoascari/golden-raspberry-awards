import { Component } from '@angular/core';

import { IMovie } from 'src/app/shared/models/movie.model';

import { MoviesService } from 'src/app/shared/services/movies/movies.service';

@Component({
  selector: 'app-winner-movies-by-year',
  templateUrl: './winner-movies-by-year.component.html',
  styleUrls: ['./winner-movies-by-year.component.scss']
})
export class WinnerMoviesByYearComponent {
  public isLoading: boolean = false;
  public searchDone: boolean = false;
  public searchYear: string|number|null = null;

  public winnerMovie: IMovie|null = null;

  constructor(private moviesService: MoviesService) {}

  public searchWinnerMovieByYear(): void {
    if (this.searchYear?.toString().length === 4) {
      this.isLoading = true;

      const queryParams: string = `winner=true&year=${this.searchYear}`;

      this.moviesService.get(queryParams).subscribe((response: any) => {
        this.winnerMovie = response.length ? response[0] : null;

        this.searchDone = true;
        this.isLoading = false;
      });
    } else {
      this.searchDone = false;
      this.winnerMovie = null;
    }
  }
}
