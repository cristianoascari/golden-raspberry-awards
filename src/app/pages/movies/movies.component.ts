import { Component, OnInit } from '@angular/core';

import { EWinnerMovie } from 'src/app/shared/models/filter.model';
import { IMovie } from 'src/app/shared/models/movie.model';

import { MoviesService } from 'src/app/shared/services/movies/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public isLoading: boolean = true;
  public movies: IMovie[] = [];

  public pageNumber: number = 0;
  public pageSize: number = 10;
  public yearFilter: string|null = null;
  public winnerFilter: EWinnerMovie = EWinnerMovie.YESNO;

  constructor(private moviesService: MoviesService) {}

  public ngOnInit(): void {
    this.getAllMovies();
  }

  private getAllMovies(): void {
    const queryParams: string = this.getQueryParams(true);
  
    this.searchMovies(queryParams);
  }

  public filterMoviesByWinner(): void {
    const queryParams: string = this.getQueryParams();
  
    this.searchMovies(queryParams);
  }

  public filterMoviesByYear(): void {
    if (this.yearFilter?.toString().length === 4) {
      const queryParams: string = this.getQueryParams();

      this.searchMovies(queryParams);
    }
  }

  private searchMovies(queryParams: string): void {
    this.isLoading = true;

    this.moviesService.get(queryParams).subscribe((response: any) => {
      this.movies = response?.content ?? [];

      this.isLoading = false;
    });
  }

  private getQueryParams(fullSearch: boolean = false): string {
    let queryParams: string = this.getPageNumberParam() + this.getPageSizeParam();

    if (!fullSearch) {
      queryParams += this.getWinnerParam();
      queryParams += this.getYearParam();
    }

    return queryParams;
  }

  private getPageNumberParam(): string {
    return `page=${this.pageNumber}`;
  }

  private getPageSizeParam():  string {
    return `&size=${this.pageSize}`;
  }

  private getWinnerParam(): string {
    if (this.winnerFilter === EWinnerMovie.YES) {
      return '&winner=yes';
    } else if (this.winnerFilter === EWinnerMovie.NO) {
      return '&winner=no';
    }

    return '';
  }

  private getYearParam(): string {
    return this.yearFilter?.toString().length === 4 ? `&year=${this.yearFilter}` : '';
  }
}
