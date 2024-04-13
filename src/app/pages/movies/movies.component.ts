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

  public pageNumber: number = 1;
  public pageSize: number = 15;
  public yearFilter: string|null = null;
  public winnerFilter: EWinnerMovie = EWinnerMovie.YESNO;
  public totalResults: number = 0;
  public totalPages: number = 0;

  constructor(private moviesService: MoviesService) {}

  public ngOnInit(): void {
    this.getAllMovies();
  }

  private getAllMovies(): void {
    const queryParams: string = this.getQueryParams(true);
  
    this.searchMovies(queryParams);
  }

  public filterMoviesByWinner(): void {
    this.pageNumber = 1;
    const queryParams: string = this.getQueryParams();
  
    this.searchMovies(queryParams);
  }

  public filterMoviesByYear(): void {
    this.pageNumber = 1;
    const yearLength: number = this.yearFilter?.toString().length ?? 0;

    if (yearLength === 4 || yearLength === 0) {
      const queryParams: string = this.getQueryParams();

      this.searchMovies(queryParams);
    }
  }

  private searchMovies(queryParams: string): void {
    this.isLoading = true;

    this.moviesService.get(queryParams).subscribe((response: any) => {
      this.movies = response?.content ?? [];
      // this.movies = [];

      this.totalPages = response?.totalPages ?? 0;
      this.totalResults = response?.totalElements ?? 0;

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
    return `page=${this.pageNumber - 1}`;
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

  public changePage(newPage: number): void {
    this.pageNumber = newPage;

    const queryParams: string = this.getQueryParams();

    this.searchMovies(queryParams);
  }
}
