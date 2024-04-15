import { Component, OnInit } from '@angular/core';

import { IStudioWithWinners } from '../../../../shared/models/movie.model';

import { MoviesService } from '../../../../shared/services/movies/movies.service';

@Component({
  selector: 'app-top-studios-with-winners',
  templateUrl: './top-studios-with-winners.component.html',
  styleUrls: ['./top-studios-with-winners.component.scss']
})
export class TopStudiosWithWinnersComponent implements OnInit {
  public isLoading: boolean = true;
  public studiosList: IStudioWithWinners[] = [];

  constructor(private moviesService: MoviesService) {}

  public ngOnInit(): void {
    this.getTopStudiosWithWinners();
  }

  private getTopStudiosWithWinners(): void {
    this.isLoading = true;

    const queryParams: string = 'projection=studios-with-win-count';

    this.moviesService.get(queryParams).subscribe((response: any) => {
      this.studiosList = [];
      const serverData: IStudioWithWinners[] = response?.studios ?? [];

      if (serverData.length) {
        this.studiosList = serverData.filter((studio: IStudioWithWinners) => serverData.indexOf(studio) < 3);
      }

      this.isLoading = false;
    });
  }
}
